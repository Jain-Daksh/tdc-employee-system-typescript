import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const secretKey = process.env.SECRET_KEY!

interface User {
  id: string
  name: string
  email: string
  password: string
  organization: string
  roleId: number
  created_at: Date
  updated_at: Date
  deleted_at?: Date | null
}

console.log(process.env.SECRET_KEY)
// export async function validateUserCredentials(email: string, password: string) {
export async function validateUserCredentials(
  email: string,
  password: string
): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (!user) {
    return null
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (passwordMatch) {
    return user
  }
  return null
}

export function generateJWTToken(userId: number) {
  const token = jwt.sign({ id: userId }, secretKey, {
    expiresIn: '1d'
  })
  return token
}
