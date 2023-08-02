// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function seedEnums() {
//   try {
//     await prisma.role.create({
//       data: {
//         role: 'Admin'
//       }
//     })

//     await prisma.role.create({
//       data: {
//         role: 'Manager'
//       }
//     })

//     await prisma.role.create({
//       data: {
//         role: 'Employee'
//       }
//     })

//     console.log('Enum data added successfully!')
//   } catch (error) {
//     console.error('Error seeding enum data:', error)
//   } finally {
//     await prisma.$disconnect()
//   }
// }

// seedEnums()

// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function seedData() {
//   try {
//     await prisma.role.create({
//       data: {
//         role: 'Admin'
//       }
//     })

//     await prisma.role.create({
//       data: {
//         role: 'Employee'
//       }
//     })

//     await prisma.role.create({
//       data: {
//         role: 'Manager'
//       }
//     })

//     console.log('Enum data added successfully!')
//   } catch (error) {
//     console.error('Error seeding data:', error)
//   } finally {
//     await prisma.$disconnect()
//   }
// }

// seedData()

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedUsers() {
  const roles = await prisma.role.findMany()

  if (roles.length === 0) {
    await prisma.role.create({
      data: {
        role: 'Admin'
      }
    })

    await prisma.role.create({
      data: {
        role: 'Employee'
      }
    })

    await prisma.role.create({
      data: {
        role: 'Manager'
      }
    })

    console.log('Roles created:')
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
