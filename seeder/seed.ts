// import { PrismaClient } from '@prisma/client'
// import bcrypt from 'bcrypt'

// const prisma = new PrismaClient()

// async function seedUsers() {
//   const users = await prisma.user.findMany()

//   if (users.length === 0) {
//     const password = await bcrypt.hash('admin', 10)

//     const newUser = await prisma.user.create({
//       data: {
//         name: 'Admin',
//         email: 'admin@gmail.com',
//         password,
//         organization: 'xyz',
//         roleId: 1
//       }
//     })

//     console.log('User created:', newUser)
//   } else {
//     console.log('User data already exists.')
//   }

//   const roles = await prisma.role.findMany()

//   if (roles.length === 0) {
//     const userRole = await prisma.role.create({
//       data: {
//         id: 1,
//         name: 'Employee'
//       }
//     })
//     const managerRole = await prisma.role.create({
//       data: {
//         id: 2,
//         name: 'Manager'
//       }
//     })
//     const adminRole = await prisma.role.create({
//       data: {
//         id: 3,
//         name: 'Admin'
//       }
//     })

//     console.log('Roles created:', managerRole, adminRole, userRole)
//   } else {
//     console.log('Role data already exists.')
//   }
// }

// async function main() {
//   try {
//     await seedUsers()
//   } catch (error) {
//     console.error('Error seeding data:', error)
//   } finally {
//     await prisma.$disconnect()
//   }
// }

// main()

// import { PrismaClient } from '@prisma/client' // Import the RoleCreateInput type
// import bcrypt from 'bcrypt'

// interface RoleCreateInput {
//   name: string
// }

// const prisma = new PrismaClient()

// async function seedUsers() {
//   const users = await prisma.user.findMany()

//   if (users.length === 0) {
//     const password = await bcrypt.hash('admin', 10)

//     const newUser = await prisma.user.create({
//       data: {
//         name: 'Admin',
//         email: 'admin@gmail.com',
//         password,
//         organization: 'xyz',
//         roleId: 1
//       }
//     })

//     console.log('User created:', newUser)
//   } else {
//     console.log('User data already exists.')
//   }

//   const roles = await prisma.role.findMany()

//   if (roles.length === 0) {
//     const userRole: RoleCreateInput = {
//       // Annotate the data object with RoleCreateInput
//       name: 'Employee'
//     }
//     const managerRole: RoleCreateInput = {
//       // Annotate the data object with RoleCreateInput
//       name: 'Manager'
//     }
//     const adminRole: RoleCreateInput = {
//       // Annotate the data object with RoleCreateInput
//       name: 'Admin'
//     }

//     await prisma.role.createMany({
//       data: [userRole, managerRole, adminRole]
//     })

//     console.log('Roles created:', managerRole, adminRole, userRole)
//   } else {
//     console.log('Role data already exists.')
//   }
// }

// async function main() {
//   try {
//     await seedUsers()
//   } catch (error) {
//     console.error('Error seeding data:', error)
//   } finally {
//     await prisma.$disconnect()
//   }
// }

// main()

// import { PrismaClient } from '@prisma/client'
// import bcrypt from 'bcrypt'

// const prisma = new PrismaClient()
// interface RoleCreateInput {
//   name: string
// }
// async function seedUsers() {
//   const users = await prisma.user.findMany()

//   if (users.length === 0) {
//     const password = await bcrypt.hash('admin', 10)

//     const newUser = await prisma.user.create({
//       data: {
//         name: 'Admin',
//         email: 'admin@gmail.com',
//         password,
//         organization: 'xyz',
//         roleId: 1
//       }
//     })

//     console.log('User created:', newUser)
//   } else {
//     console.log('User data already exists.')
//   }

//   // const roles = await prisma.role.findMany()

//   // if (roles.length === 0) {
//   //   const rolesData = [
//   //     { name: 'Employee' },
//   //     { name: 'Manager' },
//   //     { name: 'Admin' }
//   //   ]

//   //   const createdRoles = await prisma.role.createMany({
//   //     data: rolesData.map(role => ({ role }))
//   //   })

//   //   console.log('Roles created:', createdRoles)
//   // } else {
//   //   console.log('Role data already exists.')
//   // }

//   // const roles = await prisma.role.findMany()

//   // if (roles.length === 0) {
//   //   const userRole: RoleCreateManyInput = {
//   //     // Annotate the data object with RoleCreateInput
//   //     name: 'Employee'
//   //   }
//   //   const managerRole: RoleCreateManyInput = {
//   //     // Annotate the data object with RoleCreateInput
//   //     name: 'Manager'
//   //   }
//   //   const adminRole: RoleCreateManyInput = {
//   //     // Annotate the data object with RoleCreateInput
//   //     name: 'Admin'
//   //   }

//   //   await prisma.role.createMany({
//   //     data: [userRole, adminRole, managerRole]
//   //   })

//   //   console.log('Roles created:', managerRole, adminRole, userRole)
//   // } else {
//   //   console.log('Role data already exists.')
//   // }

//   const roles = await prisma.role.findMany()

//   if (roles.length === 0) {
//     const rolesData: RoleCreateInput[] = [
//       { name: 'Employee' },
//       { name: 'Manager' },
//       { name: 'Admin' }
//     ]

//     const createdRoles = await prisma.role.createMany({
//       data: rolesData
//     })

//     console.log('Roles created:', createdRoles)
//   } else {
//     console.log('Role data already exists.')
//   }
// }

// async function main() {
//   try {
//     await seedUsers()
//   } catch (error) {
//     console.error('Error seeding data:', error)
//   } finally {
//     await prisma.$disconnect()
//   }
// }

// main()

// import { PrismaClient, RoleCreateManyInput } from '@prisma/client'
// import bcrypt from 'bcrypt'

// const prisma = new PrismaClient()

// async function seedUsers() {
//   const users = await prisma.user.findMany()

//   if (users.length === 0) {
//     const password = await bcrypt.hash('admin', 10)

//     const newUser = await prisma.user.create({
//       data: {
//         name: 'Admin',
//         email: 'admin@gmail.com',
//         password,
//         organization: 'xyz',
//         roleId: 1
//       }
//     })

//     console.log('User created:', newUser)
//   } else {
//     console.log('User data already exists.')
//   }

//   const roles = await prisma.role.findMany()

//   if (roles.length === 0) {
//     const rolesData: RoleCreateManyInput[] = [
//       { role: { name: 'Employee' } },
//       { role: { name: 'Manager' } },
//       { role: { name: 'Admin' } }
//     ]

//     const createdRoles = await prisma.role.createMany({
//       data: rolesData
//     })

//     console.log('Roles created:', createdRoles)
//   } else {
//     console.log('Role data already exists.')
//   }
// }

// async function main() {
//   try {
//     await seedUsers()
//   } catch (error) {
//     console.error('Error seeding data:', error)
//   } finally {
//     await prisma.$disconnect()
//   }
// }

// main()

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
        role: {
          connectOrCreate: {
            roleId: 1
          }
        }
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
        name: 'Employee'
      }
    })
    const managerRole = await prisma.role.create({
      data: {
        name: 'Manager'
      }
    })
    const adminRole = await prisma.role.create({
      data: {
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
