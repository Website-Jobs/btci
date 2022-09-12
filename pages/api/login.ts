import type { NextApiRequest, NextApiResponse } from "next";
import { LoggedInUser } from "../../interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoggedInUser>
) {
  const { email, password } = req.body;

  res.status(200).json({ email: email, accid: password });
}
