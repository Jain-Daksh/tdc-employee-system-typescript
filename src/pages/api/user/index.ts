import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { name, password, email, organization, roleId } = req.body

      const hashedPassword = await bcrypt.hash(password, 10)
      const newEmployee = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          organization,
          roleId: Number(roleId)
        }
      })

      return res.status(201).json(newEmployee)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Something went wrong' })
    }
  } else if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany({
        include: {
          role: true,
          manager: true
        }
      })
      return res.status(200).json(users)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Something went wrong' })
    }
  } else if (req.method === 'DELETE') {
    try {
      const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id

      if (!id) {
        return res.status(400).json({ message: 'User ID is required' })
      }
      console.log(id)
      await prisma.user.delete({
        where: { id: id }
      })

      return res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Something went wrong' })
    }
  } else if (req.method === 'PUT') {
    try {
      const { id, ...data } = req.body

      const updatedUser = await prisma.user.update({
        where: { id: id },
        data
      })

      res.status(200).json(updatedUser)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Something went wrong' })
    }
  }
}
