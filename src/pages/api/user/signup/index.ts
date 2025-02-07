import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/dbConnect";
import User from "@/db/models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  switch (req.method) {
    case "POST":
      try {
        const newUser = await User.create(req.body);
        res.status(201).send(newUser.nickname);
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
      break;

    case "GET":
      try {
        const user = await User.findOne(req.query);
        if (user) {
          return res.status(200).json({
            isUsed: true,
            message:
              "이미 가입된 email입니다. 다른 email로 가입을 진행해 주세요.",
          });
        }
        res.status(200).json({
          isUsed: false,
          message: "사용 가능한 email입니다.",
        });
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
      break;

    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
