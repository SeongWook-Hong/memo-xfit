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
        return res.status(201).send(newUser.nickname);
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
      break;

    case "GET":
      try {
        const user = await User.findOne(req.query);
        if (user) {
          return res.status(409).json({ message: "Conflict" });
        }
        res.status(200).json({ message: "사용 가능한 email입니다." });
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
      break;

    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
