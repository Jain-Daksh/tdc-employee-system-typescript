import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function seedUsers() {
  const users = await prisma.user.findMany()

  if (users.length === 0) {
    const password = await bcrypt.hash('admin', 10)

    const newUser = await prisma.user.create({
      data: {
        name: 'Admin',
        email: 'admin@gmail.com',
        password,
        organization: 'xyz',
        roleId: 1
      }
    })

    console.log('User created:', newUser)
  } else {
    console.log('User data already exists.')
  }

  const roles = await prisma.role.findMany()

  if (roles.length === 0) {
    const userRole = await prisma.role.create({
      data: {
        id: 1,
        name: 'Employee'
      }
    })
    const managerRole = await prisma.role.create({
      data: {
        id: 2,
        name: 'Manager'
      }
    })
    const adminRole = await prisma.role.create({
      data: {
        id: 3,
        name: 'Admin'
      }
    })

    console.log('Roles created:', managerRole, adminRole, userRole)
  } else {
    console.log('Role data already exists.')
  }
}

async function main() {
  try {
    await seedUsers()
  } catch (error) {
    console.error('Error seeding data:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
