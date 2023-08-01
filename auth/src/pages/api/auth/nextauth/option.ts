import NextAuth from 'next-auth'
import { options } from './route'

const handler = NextAuth(options)

export { handler as GET, handler as POST, options }
