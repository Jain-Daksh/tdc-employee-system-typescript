import AddUserFormNew from '@/components/add1'
import ProtectedRoute from '@/utils/PrivateRoute'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const AddUser = () => {
  const router = useRouter()
  useEffect(() => {
    if (!window) return
    const userRole = localStorage.getItem('admin')
    if (userRole !== 'true') router.push('/login')
  }, [router])

  return (
    <ProtectedRoute>
      {/* <LayoutPage> */}
      <div>
        {/* <AddUsers name={''} email={''} password={''} organization={''} /> */}
        <AddUserFormNew />
      </div>
      {/* </LayoutPage> */}
    </ProtectedRoute>
  )
}

export default AddUser
