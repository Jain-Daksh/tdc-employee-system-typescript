import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PATCH') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { id, name, password, email, organization } = req.body

    if (!email || !name || !organization) {
      return res.status(400).json({ message: 'All fields are required' })
    }
    let hashedPassword
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10)
    }

    const user = await prisma.user.update({
      where: { id: id },
      data: {
        name,
        email,
        organization,
        password: hashedPassword
      }
    })

    return res.status(200).json(user)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Something went wrong' })
  }
}
