// import { PrismaClient } from '@prisma/client'
// import { NextApiRequest, NextApiResponse } from 'next'
// const prisma = new PrismaClient()

// import bcrypt from 'bcrypt'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' })
//   }
//   const { name, password, email, organization } = req.body
//   const existingUser = await prisma.user.findUnique({ where: { email } })

//   if (existingUser) {
//     return res.status(409).json({ message: 'Email already exists' })
//   }
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10)

//     const user = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password: hashedPassword,
//         organization
//       }
//     })

//     return res.status(201).json({ message: 'User added successfully', user })
//   } catch (error) {
//     return res.status(500).json({ message: 'Error adding user', error })
//   }
// }

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

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
}
