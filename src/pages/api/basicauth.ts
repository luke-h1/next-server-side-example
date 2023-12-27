import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("WWW-Authenticate", 'Basic realm="Access to tts website"');
  res.status(401).end();
}
