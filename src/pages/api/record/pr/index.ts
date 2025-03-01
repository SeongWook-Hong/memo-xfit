import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import dbConnect from "@/db/dbConnect";
import PR from "@/db/models/PR";

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

    case "POST":
      try {
        const newPR = await PR.create(req.body);
        return res.status(201).send(newPR);
      } catch (error: any) {
        if (error.code === 11000) {
          return res.status(400).json({ message: "duplicated user", error });
        }
        res.status(500).json({ message: "Server error", error });
      }
      break;

    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
