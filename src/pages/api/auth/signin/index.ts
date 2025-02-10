import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/dbConnect";
import User from "@/db/models/User";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  switch (req.method) {
    case "POST":
      try {
        const userInfo = await User.findOne({
          email: req.body.email,
          password: req.body.password,
        });
        if (!userInfo) {
          return res.status(401).json({
            message: "not authorized",
          });
        }
        const token = jwt.sign(
          {
            userId: userInfo._id,
            email: userInfo.email,
            nickname: userInfo.nickname,
          },
          process.env.JWT_SECRET!,
          { expiresIn: "1d" }
        );
        res.setHeader(
          "Set-Cookie",
          `loginToken=${token}; Path=/; Max-Age=3600; HttpOnly; Secure; SameSite=Strict`
        );
        res.status(201).send(userInfo.nickname);
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
      break;

    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
