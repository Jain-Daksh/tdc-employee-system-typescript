import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()
const secretKey = process.env.SECRET_KEY

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { email, password } = req.body

  try {
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (isPasswordValid) {
      const token = jwt.sign(
        { userId: user.id, role: user.is_admin },
        secretKey,
        {
          expiresIn: '1h'
        }
      )
      res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/`)
      // res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/`)
      // res.status(200).json({ message: 'Login successful' })
      return res.status(200).json({ token, user })
      // return res.status(200).json({ token, user })
    } else {
      return res.status(401).json({ message: 'Invalid email or password' })
    }
  } catch (error) {
    console.error('Error occurred:', error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

// import { PrismaClient } from '@prisma/client'
// import bcrypt from 'bcrypt'
// import { NextApiRequest, NextApiResponse } from 'next'
// import { generateToken } from '../../utils/authVerify'

// const prisma = new PrismaClient()
// const secretKey = process.env.SECRET_KEY

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' })
//   }

//   const { email, password } = req.body

//   try {
//     const user = await prisma.user.findUnique({
//       where: { email }
//     })

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' })
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password)

//     if (isPasswordValid) {
//       const token = generateToken({ userId: user.id }, secretKey, {
//         expiresIn: '1h'
//       })
//       const token = generateToken({
//         userId: user.id,
//         email: user.email,
//         password: isPasswordValid
//       })
//       res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/`)
//       // res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/`)
//       res.status(200).json({ message: 'Login successful' })
//       // return res.status(200).json({ token, user })
//       // return res.status(200).json({ token, user })
//     } else {
//       return res.status(401).json({ message: 'Invalid email or password' })
//     }
//   } catch (error) {
//     console.error('Error occurred:', error)
//     return res.status(500).json({ message: 'Internal Server Error' })
//   }
// }

// import { PrismaClient } from '@prisma/client'
// import bcrypt from 'bcrypt'
// import { NextApiRequest, NextApiResponse } from 'next'
// import { generateToken } from '../../utils/authVerify'

// const prisma = new PrismaClient()

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' })
//   }
//   try {
//     const user = await prisma.user.findUnique({
//       where: { email: req.body.email }
//     })

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' })
//     }

//     const isPasswordValid = await bcrypt.compare(
//       req.body.password,
//       user.password
//     )

//     if (isPasswordValid) {
//       // const token = generateToken({ userId: user.id }, secretKey, {
//       //   expiresIn: '1h'
//       // })
//       const token = generateToken({
//         userId: user.id,
//         email: user.email,
//         password: isPasswordValid
//       })

//       // sessionStorage.setItem('token', token)

//       // sessionStorage.setItem('token', token)
//       res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/`)
//       // res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/`)
//       res.status(200).json({ message: 'Login successful' })
//       // return res.status(200).json({ token, user })
//       // return res.status(200).json({ token, user })
//     } else {
//       return res.status(401).json({ message: 'Invalid email or password' })
//     }
//   } catch (error) {
//     console.error('Error occurred:', error)
//     return res.status(500).json({ message: 'Internal Server Error' })
//   }
// }
