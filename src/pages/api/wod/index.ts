import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/dbConnect";
import Wod from "@/db/models/Wod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const wods = await Wod.find().sort({ date: -1 });
        return res.status(200).send(wods);
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
      break;

    case "POST":
      try {
        const newWod = await Wod.create(req.body);
        return res.status(201).send(newWod);
      } catch (error: any) {
        if (error.code === 11000) {
          return res.status(400).json({ message: "duplicated date", error });
        }
        res.status(500).json({ message: "Server error", error });
      }
      break;

    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
