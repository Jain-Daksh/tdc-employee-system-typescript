import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seed() {
  const role = await prisma.role.create({
    data: {
      name: 'admin' // Replace with your desired role name
    }
  })

  const user = await prisma.user.create({
    data: {
      name: 'John Doe', // Replace with user details
      email: 'john@example.com',
      password: 'hashedPassword', // Replace with a hashed password
      organization: 'ACME Corp', // Replace with organization name
      role: {
        connect: {
          id: role.id
        }
      }
    }
  })

  console.log('Seeding completed!')
}

seed()
  .catch(error => {
    console.error('Error while seeding:', error)
  })
  .finally(() => {
    prisma.$disconnect()
  })