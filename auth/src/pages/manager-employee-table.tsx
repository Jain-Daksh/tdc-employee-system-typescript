// import ManagerEmployeesPage from '@/components/ManagerTable'
// // import withAuth from '@/utils/PrivateRoute'
// import { getServerSession } from 'next-auth/next'
// import { redirect } from 'next/navigation'
// import { options } from './api/auth/nextauth/option'

// const Users = async () => {
//   const session = await getServerSession(options)
//   if (!session) {
//     redirect('/api/auth/signin?callbackUrl=/server')
//   }
//   // const { data: session } = useSession({
//   //   required: true,
//   //   onUnauthenticated() {
//   //     redirect('/api/auth/signin?callbackUrl=/client')
//   //   }
//   // })
//   return (
//     <div>
//       <ManagerEmployeesPage />
//     </div>
//   )
// }

// export default Users

// // pages/Page1.tsx

import { signIn, signOut, useSession } from 'next-auth/react'

export default function HomePage() {
  const { data: session } = useSession()

  return (
    <div>
      {!session ? (
        <>
          <p>You are not signed in.</p>
          <button onClick={() => signIn('credentials')}>Sign in</button>
        </>
      ) : (
        <>
          <p>Welcome, {session.user?.email}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  )
}

// import withAuth from '../utils/PrivateRoute'

// const Page1: React.FC = () => {
//   return (
//     <div>
//       <h1>Page 1</h1>
//       <p>This is a protected page.</p>
//     </div>
//   )
// }

// export default withAuth(Page1)
