import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { validateUserCredentials } from '../../../utils/auth'
interface Credentials {
  email: string
  password: string
}
const options = {
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
    async jwt(token: { id: any; email: any }, user: { id: any; email: any }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    async session(session: { user: any }, user: any) {
      session.user = user
      return Promise.resolve(session)
    }
  },
  session: {
    jwt: true,
    maxAge: 60 * 60 * 24
  },
  database: process.env.DATABASE_URL
}

export default NextAuth(options)

// import NextAuth from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import { validateUserCredentials } from '../../../utils/auth'
// interface Credentials {
//   email: string
//   password: string
// }
// const options = {
//   secret: process.env.SECRET_KEY,
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         // email: { label: 'Email', type: 'email' },
//         // password: { label: 'Password', type: 'password' }
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' }
//       },
//       // async authorize(credentials) {
//       async authorize(
//         credentials: Record<'email' | 'password', string> | undefined
//       ) {
//         if (!credentials) {
//           return null
//         }
//         const { email, password } = credentials
//         const user = await validateUserCredentials(email, password)

//         if (user) {
//           return user
//         }

//         return null
//       }
//     })
//   ],

//   callbacks: {
//     async jwt(token: { id: any; email: any }, user: { id: any; email: any }) {
//       if (user) {
//         token.id = user.id
//         token.email = user.email
//       }
//       return token
//     },
//     async session(session: { user: any }, user: any) {
//       session.user = user
//       return Promise.resolve(session)
//     }
//   },
//   session: {
//     // algorithm: 'HS256',
//     jwt: true,
//     maxAge: 60 * 60 * 24
//   },
//   database: process.env.DATABASE_URL
// }

// export default NextAuth(options)

// not getting user details and role

// import NextAuth, { NextAuthOptions, Session, User } from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import { validateUserCredentials } from '../../../utils/auth'

// interface Credentials {
//   email: string
//   password: string
// }

// const options: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' }
//       },
//       async authorize(credentials: Credentials | undefined) {
//         if (!credentials) {
//           return null
//         }
//         const { email, password } = credentials
//         const user = await validateUserCredentials(email, password)

//         if (user) {
//           return user
//         }

//         return null
//       }
//     })
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id
//         token.email = user.email
//         console.log('user', user)
//       }
//       return token
//     },
//     async session({
//       session,
//       user
//     }: {
//       session: Session
//       user: User | undefined
//     }) {
//       session.user = user
//       return Promise.resolve(session)
//     }
//   },
//   jwt: {
//     secret: process.env.SECRET_KEY
//     // You can specify other options for JWT here
//   },
//   session: {
//     maxAge: 60 * 60 * 24
//     // Other valid properties for the session object can be included here
//   }
// }

// export default NextAuth(options)

// working code but not getting all user data

// import NextAuth from 'next-auth'
// // import Providers from 'next-auth/providers'
// import CredentialsProvider from 'next-auth/providers/credentials'
// // const authHandler: NextApiHandler = (req, res) => NextAuth(req, res)

// // export default authHandler

// interface Credentials {
//   email: string
//   password: string
// }
// interface MyToken {
//   id: string
//   email: string
//   name: string
//   roleId: string
// }
// const options = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },
//       authorize: async (credentials: Credentials) => {
//         // Your validation logic here to authenticate the user
//         const user = { email: credentials.email, role: c }
//         if (user) {
//           return Promise.resolve(user)
//         }
//         return Promise.resolve(null)
//       }
//     })
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id
//         token.email = user.email
//         token.roleId = user.roleId
//         token.user = user
//       }
//       return token
//     },
//     async session({ session, token }) {
//       session.user = token
//       return session
//     }
//   },
//   session: {
//     jwt: true, // Enable the usage of JWT for session
//     maxAge: 60 * 60 * 24 // 24 hours
//   },
//   jwt: {
//     secret: 'YOUR_JWT_SECRET_HERE' // Replace with your actual JWT secret
//   }
// }

// export default NextAuth(options)
