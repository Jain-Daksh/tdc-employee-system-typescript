import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
interface Props {
  children: any
}
const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const [authToken, setAuthToken] = useState('')

  const router = useRouter()
  useEffect(() => {
    const token = window?.localStorage?.getItem('authtoken')
    setAuthToken(token)
    if (!token) {
      router.push('/login')
    }
  }, [])

  if (!authToken) {
    return <div>Loading...</div>
  }
  return <>{children}</>
}

export default ProtectedRoute
