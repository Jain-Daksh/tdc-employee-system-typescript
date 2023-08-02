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
  return (
    <MainLayout>
      <h1>Welcome,</h1>
      <p>Name:</p>
      <button onClick={() => signOut()}>Sign out</button>
    </MainLayout>
  )
}
