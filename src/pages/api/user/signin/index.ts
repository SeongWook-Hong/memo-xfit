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
        const userInfo = await User.findOne({
          email: req.body.email,
          password: req.body.password,
        });
        if (!userInfo) {
          return res.status(200).send({
            isSuccess: false,
            message:
              "아이디 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 확인해 주세요.",
          });
        }
        res.status(201).send({ data: userInfo });
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
      break;

    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
