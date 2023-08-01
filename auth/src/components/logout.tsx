import { Button } from 'antd'
import { useAuth } from '../utils/auth'

const LogoutButton = () => {
  const { setAuthToken } = useAuth()

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    setAuthToken('')
  }

  return (
    <Button type="primary" onClick={handleLogout}>
      Logout
    </Button>
  )
}

export default LogoutButton
