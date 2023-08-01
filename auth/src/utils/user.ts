import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Function to get a user by their username
export async function getUserByUsername(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })
  return user
}
