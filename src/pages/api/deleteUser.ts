// // pages/api/deleteUser.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'DELETE') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const { id } = req.query;

//     if (!id) {
//       return res.status(400).json({ message: 'User ID is required' });
//     }

//     // Delete the user from the database
//     await prisma.user.delete({
//       where: { id: Number(id) },
//     });

//     return res.status(200).json({ message: 'User deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Something went wrong' });
//   }
// }

import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { id } = req.query

    if (!id) {
      return res.status(400).json({ message: 'User ID is required' })
    }
    await prisma.user.delete({
      where: { id: id }
    })

    return res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Something went wrong' })
  }
}
