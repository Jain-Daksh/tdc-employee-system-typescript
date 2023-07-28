import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ProtectedRoute = ({ children }) => {
  // const [authToken, setAuthToken] = useState('')

  const router = useRouter()
  // useEffect(() => {
  //   const authToken = localStorage.getItem('authtoken')
  //   setAuthToken(authToken)
  // }, [])
  const authToken = localStorage.getItem('authtoken')
  useEffect(() => {
    if (!authToken) {
      router.push('/login')
    }
  }, [authToken, router])

  if (!authToken) {
    return <div>Loading...</div>
  }
  return <>{children}</>
}

export default ProtectedRoute
