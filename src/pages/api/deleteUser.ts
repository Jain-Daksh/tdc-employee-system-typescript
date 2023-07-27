import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'delete') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  try {
    const { id } = req.body
    const user = await prisma.user.delete({
      where: { id: id }
    })
    return res.status(200).json(user)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Something went wrong' })
  }
}
