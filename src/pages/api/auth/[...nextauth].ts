// import NextAuth, { User } from 'next-auth'
// // import Providers from 'next-auth/providers/credentials'
// import CredentialsProvider from 'next-auth/providers/credentials'

// const options = {
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign-in form (e.g., "Sign in with...")
//       name: 'Credentials',
//       credentials: {
//         username: { label: 'Username', type: 'text' },
//         password: { label: 'Password', type: 'password' }
//       },
//       async authorize(credentials: { username: string; password: string }) {
//         // Implement your custom authentication logic here
//         // For example, check the credentials against your database and return a user object if valid, or null if invalid.
//         const { username, password } = credentials
//         const user = await validateUserCredentials(username, password)
//         if (user) {
//           // You can include additional user information in the `user` object if needed
//           return Promise.resolve(user)
//         } else {
//           return Promise.resolve(null)
//         }
//       }
//     })
//   ],
//   session: {
//     jwt: true // Use JWT for session storage
//   },
//   callbacks: {
//     async jwt(token, user) {
//       // Add user id to the token
//       if (user) {
//         token.id = user.id
//       }
//       return token
//     },
//     async session(session, token) {
//       // Add user id to the session
//       session.user.id = token.id
//       return session
//     }
//   }

// export default NextAuth(options)

// function validateUserCredentials(username: string, password: string) {
//   throw new Error('Function not implemented.');
// }

// import NextAuth from 'next-auth'
// // import Providers from 'next-auth/providers'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import validateUserCredentials from '../../../utils/auth'
// const options = {
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign-in form (e.g., "Sign in with...")
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'email', type: 'text' },
//         password: { label: 'Password', type: 'password' }
//       },
//       async authorize(credentials: { email: string; password: string }) {
//         // Implement your custom authentication logic here
//         // For example, check the credentials against your database and return a user object if valid, or null if invalid.
//         const { email, password } = credentials
//         const user = await validateUserCredentials(email, password)
//         if (user) {
//           return Promise.resolve(user)
//         } else {
//           return Promise.resolve(null)
//         }
//       }
//     })
//   ],
//   session: {
//     jwt: true // Use JWT for session storage
//   },
//   callbacks: {
//     async jwt(token, user) {
//       // Add user id to the token
//       if (user) {
//         token.id = user.id
//       }
//       return token
//     },
//     async session(session, token) {
//       // Add user id to the session
//       session.user.id = token.id
//       return session
//     }
//   }
// }

// export default NextAuth(options)

// import NextAuth from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials' // Use this import statement

// import validateUserCredentials from '../../../utils/auth'

// const options = {
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign-in form (e.g., "Sign in with...")
//       name: 'Credentials',
//   credentials: {
//     email: { label: 'email', type: 'text' },
//     password: { label: 'Password', type: 'password' }
//   },
//   async authorize(credentials: { email: string; password: string }) {
//     // Implement your custom authentication logic here
//     // For example, check the credentials against your database and return a user object if valid, or null if invalid.
//     const { email, password } = credentials
//     const user = await validateUserCredentials(email, password)
//     if (user) {
//       return Promise.resolve(user)
//     } else {
//       return Promise.resolve(null)
//     }
//   }
// })
//   ],
//   session: {
//     jwt: true
//   },
//   callbacks: {
//     async jwt(token, user) {
//       if (user) {
//         token.id = user.id
//       }
//       return token
//     },
//     async session(session, token) {
//       // Add user id to the session
//       session.user.id = token.id
//       return session
//     }
//   },
//   pages: {
//     signIn: '/login'
//   }
// }

// export default NextAuth(options)
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import validateUserCredentials from '../../../utils/auth'
const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      // credentials: {
      //   email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
      //   password: { label: 'Password', type: 'password' }
      // },
      // async authorize(credentials, req) {
      //   const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }

      //   if (user) {
      //     return user
      //   } else {
      //     return null
      //   }
      // }
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials: { email: string; password: string }) {
        // Implement your custom authentication logic here
        // For example, check the credentials against your database and return a user object if valid, or null if invalid.
        const { email, password } = credentials
        const user = await validateUserCredentials(email, password)
        if (user) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      }
    })
  ],
  session: {
    jwt: true
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session(session, token) {
      // Add user id to the session
      session.user.id = token.id
      return session
    }
  },
  pages: {
    signIn: '/login'
  }
}

export default NextAuth(options)
