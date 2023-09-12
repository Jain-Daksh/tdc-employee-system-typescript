import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { reporteeId, managerId } = req.body

      const newUserReport = await prisma.user_reportee.create({
        data: {
          reporteeId,
          managerId
        }
      })

      return res.status(201).json(newUserReport)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Something went wrong' })
    }
  } else if (req.method === 'GET') {
    try {
      const users = await prisma.user_reportee.findMany({
        include: {
          manager: true,
          reportee: true
        }
      })
      return res.status(200).json(users)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Something went wrong' })
    }
  }
}
