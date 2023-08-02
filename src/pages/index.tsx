import MainLayout from '@/components/SIdeBar'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function ProtectedPage() {
  const { data: session, status } = useSession()

  const router = useRouter()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session) {
    router.push('/login')
    return null
  }
  console.log(session?.user.name)
  return (
    <MainLayout>
      <h1>Welcome to your dashboard</h1>
      <p>Name: {session?.user.name}</p>
      <p>Email: {session?.user.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </MainLayout>
  )
}
