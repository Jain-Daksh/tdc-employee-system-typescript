// import NextAuth from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import { validateUserCredentials } from '../../../utils/auth'
// interface Credentials {
//   email: string
//   password: string
// }
// const options = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' }
//       },
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
//     jwt: true,
//     maxAge: 60 * 60 * 24
//   },
//   database: process.env.DATABASE_URL
// }

// export default NextAuth(options)

// ---------working

// import NextAuth, { NextAuthOptions } from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import { validateUserCredentials } from '../../../utils/auth'
// interface Credentials {
//   email: string
//   password: string
//   name: string
//   roleId: number
// }

// interface User {
//   id: string
//   name: string
//   email: string
//   password: string
//   organization: string
//   roleId: number
//   created_at: Date
//   updated_at: Date
//   deleted_at?: Date | null
// }
// const options: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' }
//       },
//       async authorize(
//         credentials: Record<'email' | 'password', string> | undefined
//       ) {
//         if (!credentials) {
//           return null
//         }
//         const { email, password } = credentials
//         const user: User = await validateUserCredentials(email, password)

//         if (user) {
//           return user
//         }

//         return null
//       }
//     })
//   ],
//   callbacks: {
//     async jwt(params) {
//       const { token, user } = params
//       // console.log('parans of jwt', params)
//       if (user) {
//         token.id = user.id
//         token.email = user.email
//         // token.role = user
//         token.role = user.roleId
//       }
//       return token
//     },
//     async session(params) {
//       // console.log('paramasss', params)

//       const { session, user, token } = params
//       session.user = user
//       session.token = token
//       // session.user.roleId = role
//       console.log('role', token.role)
//       console.log(token.name)
//       console.log('ts', token)

//       return Promise.resolve(session)
//     }
//     // async jwt(token: { id: any; email: any }, user: { id: any; email: any }) {
//     //   // User is passed from the authorize callback, and it's an object containing user details.
//     //   if (user) {
//     //     token.id = user.id
//     //     token.email = user.email
//     //   }
//     //   return token
//     // },
//     // async session(session: { user: any }, user: any) {
//     //   // const { session, user } = params
//     //   session.user = user
//     //   return Promise.resolve(session)
//     // }
//   },
//   jwt: {
//     secret: process.env.SECRET_KEY
//   },
//   session: {
//     maxAge: 60 * 60 * 24
//   },
//   debug: true
// }

// export default NextAuth(options)

// import NextAuth, { NextAuthOptions } from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import { validateUserCredentials } from '../../../utils/auth'

// interface Credentials {
//   email: string
//   password: string
//   name: string
//   roleId: number
// }

// interface User {
//   id: string
//   name: string
//   email: string
//   password: string
//   organization: string
//   roleId: number
//   created_at: Date
//   updated_at: Date
//   deleted_at?: Date | null
// }
// const options: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' }
//       },
//       async authorize(
//         credentials: Record<'email' | 'password', string> | undefined
//       ) {
//         if (!credentials) {
//           return null
//         }
//         const { email, password } = credentials
//         const user: User | null = await validateUserCredentials(email, password)

//         if (user) {
//           return user
//         }

//         return null
//       }
//     })
//   ],
//   callbacks: {
//     async jwt(params) {
//       const { token, user } = params
//       // console.log('parans of jwt', params)
//       if (user) {
//         token.id = user.id
//         token.email = user.email
//         // token.role = user
//         // token.role = user.roleId
//       }
//       return token
//     },
//     async session(params) {
//       console.log('paramasss', params)
//       const { session, user, token } = params
//       session.user = user
//       session.token = token
//       console.log('role', token.role)
//       console.log(token.name)
//       console.log('ts', token)
//       console.log('session', session)

//       return Promise.resolve(session)
//     }
//     // async jwt(token: { id: any; email: any }, user: { id: any; email: any }) {
//     //   // User is passed from the authorize callback, and it's an object containing user details.
//     //   if (user) {
//     //     token.id = user.id
//     //     token.email = user.email
//     //   }
//     //   return token
//     // },
//     // async session(session: { user: any }, user: any) {
//     //   // const { session, user } = params
//     //   session.user = user
//     //   return Promise.resolve(session)
//     // }
//   },
//   jwt: {
//     secret: process.env.SECRET_KEY
//   },
//   session: {
//     maxAge: 60 * 60 * 24
//   },
//   debug: true
// }

// export default NextAuth(options)

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
      // console.log('parans of jwt', params)
      if (user) {
        token.id = user.id
        token.email = user.email
        token.role = user
      }
      return token
    },
    async session(params) {
      // console.log('paramasss', params)

      const { session, user, token } = params
      session.user = user
      session.token = token
      // role: session.token.role
      console.log('role', token.role)
      console.log(token.name)
      console.log('ts', token)

      return Promise.resolve(session)
    }
    // async jwt(token: { id: any; email: any }, user: { id: any; email: any }) {
    //   // User is passed from the authorize callback, and it's an object containing user details.
    //   if (user) {
    //     token.id = user.id
    //     token.email = user.email
    //   }
    //   return token
    // },
    // async session(session: { user: any }, user: any) {
    //   // const { session, user } = params
    //   session.user = user
    //   return Promise.resolve(session)
    // }
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
