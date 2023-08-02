import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { validateUserCredentials } from '../../../utils/auth'
interface Credentials {
  email: string
  password: string
  name: string
  roleId: number
}
const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(
        credentials: Record<'email' | 'password', string> | undefined
      ) {
        if (!credentials) {
          return null
        }
        const { email, password } = credentials
        const user = await validateUserCredentials(email, password)

        if (user) {
          return user
        }

        return null
      }
    })
  ],
  callbacks: {
    async jwt(params) {
      const { token, user } = params
      console.log('parans of jwt', params)
      if (user) {
        token.id = user.id
        token.email = user.email
        token.role = user
      }
      return token
    },
    async session(params) {
      console.log('paramasss', params)

      const { session, user, token } = params
      session.user = user
      session.token = token
      console.log('role', token.role)
      console.log(token.name)
      console.log('ts', token)

      return Promise.resolve(session)
    }
  },
  jwt: {
    secret: process.env.SECRET_KEY
  },
  session: {
    maxAge: 60 * 60 * 24
  },
  debug: true
}
export default NextAuth(options)
