import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Simulate a delay so we can see a trace
  await new Promise((resolve) => setTimeout(resolve, 300));
  res.status(200).json({ message: 'Hello from Vercel + Datadog!' });
}
