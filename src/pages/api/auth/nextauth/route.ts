import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.Client_id as string,
      clientSecret: process.env.Client_Secret_id as string
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username:',
          type: 'text',
          placeholder: 'your-cool-username'
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'your-awesome-password'
        }
      },
      async authorize(credentials) {
        const res = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password
          })
        })
        const user = await res.json()
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },

    async session({ session, token }) {
      session.user = token as any
      return session
    }
  }
}
// callbacks: [],
// pages: {
//   signIn: "/signin"   // to create our sign in page
// }

// import CredentialsProvider from "next-auth/providers/credentials"
// providers: [
//   CredentialsProvider({
//     name: 'Credentials',
//     credentials: {
//       username: { label: "Username", type: "text", placeholder: "jsmith" },
//       password: { label: "Password", type: "password" }
//     },
//     async authorize(credentials, req) {
//       const res = await fetch("/api/login", {
//         method: 'POST',
//         body: JSON.stringify(credentials),
//         headers: { "Content-Type": "application/json" }
//       })
//       const user = await res.json()
//       if (res.ok && user) {
//         return user
//       }
//       return null
//     }
//   })
// ]
