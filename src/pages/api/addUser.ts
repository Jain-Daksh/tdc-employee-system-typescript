import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
 import { NextApiRequest, NextApiResponse } from 'next'
 
import bcrypt from 'bcrypt'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  const { name, password, email, organization } = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        organization
      }
    })

    return res.status(201).json({ message: 'User added successfully', user })
  } catch (error) {
    return res.status(500).json({ message: 'Error adding user', error })
  }
}
