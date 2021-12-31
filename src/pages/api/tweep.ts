import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export type Data = {
  id?: string | undefined;
  body: string;
  createdAt?: string | Date | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('/api/twit has been called');
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'method are not allowed',
    });
  }

  const { body } = req;

  try {
    const tweet: Prisma.TwitCreateInput = JSON.parse(body);
    const savedTweet = await prisma.twit.create({ data: tweet });
    res.status(200).json(savedTweet);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
}
