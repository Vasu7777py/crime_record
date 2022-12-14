
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function fir(
  req: NextApiRequest,
  res: NextApiResponse
){
  res.status(200);
  res.json(
    await prisma.$queryRaw`
      SELECT *
      FROM fir
    `
  );
}
