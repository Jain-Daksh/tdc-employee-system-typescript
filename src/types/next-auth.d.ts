import 'next-auth'

declare module 'next-auth' {
  interface Session {
    token?: {}
  }
  interface JWT {
    idToken?: string
  }
}
