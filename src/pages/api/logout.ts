import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Clear the token from local storage or invalidate the token on the server.
    localStorage.removeItem('token')
    res.status(200).json({ message: 'Logged out successfully' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
