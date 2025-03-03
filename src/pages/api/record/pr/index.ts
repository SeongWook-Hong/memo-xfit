import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import dbConnect from "@/db/dbConnect";
import PR from "@/db/models/PR";
import { TPrRecord } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  const token = req.cookies.loginToken;
  if (!token) return res.status(401).send("Authentication required");

  const decode = jwt.verify(token, process.env.JWT_SECRET!);
  const userId = (decode as { userId: string }).userId;

  switch (req.method) {
    case "GET":
      try {
        const pr = await PR.findOne({ userId: userId });
        return res.status(200).send(pr);
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
      break;

    case "PUT":
      try {
        const user = await PR.findOne({ userId: userId });
        if (user === null) {
          const newPR = await PR.create({
            userId: userId,
            records: [req.body],
          });
          return res.status(201).send(newPR);
        }
        const isExist = user.records.find(
          (record: TPrRecord) => record.movement === req.body.movement
        );
        if (isExist) {
          const { _id, ...rest } = isExist._doc;
          const notPR = JSON.stringify(rest) === JSON.stringify(req.body);
          if (notPR) return res.status(409).send("Same record");

          const updatePR = await PR.updateOne(
            { userId: userId, "records.movement": req.body.movement },
            {
              $set: {
                "records.$.record": req.body.record,
                "records.$.date": req.body.date,
              },
            }
          );
          return res.status(200).send(updatePR);
        }
        const uploadPR = await PR.updateOne(
          { userId: userId },
          {
            $push: { records: req.body },
          }
        );
        return res.status(200).send(uploadPR);
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
      break;

    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
