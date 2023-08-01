import MainLayout from '@/components/SIdeBar'
import AddUserFormReportee from '@/components/addUserReportee'
import { useSession } from 'next-auth/react'
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
      <AddUserFormReportee />
    </MainLayout>
  )
}
