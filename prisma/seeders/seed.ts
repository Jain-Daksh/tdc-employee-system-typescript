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
        email: 'newuser@gmail.com',
        password,
        organization: 'newuser',
        roleId: 3
      }
    })

    console.log('User created:', newUser)
  } else {
    console.log('User data already exists.')
  }
  const roles = await prisma.role.findMany()

  if (roles.length === 0) {
    const employeeRole = await prisma.role.create({
      data: {
        role: 'Employee'
      }
    })

    const managerRole = await prisma.role.create({
      data: {
        role: 'Manager'
      }
    })
    const adminRole = await prisma.role.create({
      data: {
        role: 'Admin'
      }
    })

    console.log('Roles created:', employeeRole, managerRole, adminRole)
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
