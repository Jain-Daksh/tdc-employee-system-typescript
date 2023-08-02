import { prisma } from '@/utils/prismaClient'
import { compare } from 'bcrypt'
import NextAuth, { DefaultSession, NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
interface Credentials {
  email: string
  password: string
  name: string
  roleId: number
}

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      email: string
      organization: string
      roleId: number
    } & DefaultSession['user']
  }

  interface User {
    // ...other properties
    roleId: number
    organization: string
  }
}

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'your@email.com'
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter Password'
        }
      },
      async authorize(credentials) {
        if (!credentials) return null
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email
          }
        })
        if (
          user &&
          user.password &&
          (await compare(credentials.password, user.password))
        ) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            roleId: user.roleId,
            organization: user.organization
          }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    jwt(params) {
      const { token, user } = params
      console.log('parans of jwt', params)
      if (user) {
        token.user = user
      }
      return token
    },
    session({ session, user, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          ...user,
          ...(token?.user ? token.user : {})
        }
      }
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
