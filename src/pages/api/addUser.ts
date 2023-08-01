// import { PrismaClient } from '@prisma/client'
// import bcrypt from 'bcrypt'
// import { NextApiRequest, NextApiResponse } from 'next'
// const prisma = new PrismaClient()

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' })
//   }

//   try {
//     const { password, email } = req.body

//     const hashedPassword = await bcrypt.hash(password, 10)
//     const newEmployee = await prisma.user.create({
//       data: {
//         email,
//         password: hashedPassword
//       }
//     })

//     return res.status(201).json(newEmployee)
//   } catch (error) {
//     console.error(error)
//     return res.status(500).json({ message: 'Something went wrong' })
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
