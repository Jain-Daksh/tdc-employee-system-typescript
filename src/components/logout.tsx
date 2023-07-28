// import { Button } from 'antd'

// const LogoutButton = () => {
//   // const router = useRouter()

//   const handleLogout = () => {
//     console.log('clciked')
//     localStorage.removeItem('authtoken')
//     // router.push('/login')
//   }

//   return (
//     <Button type="primary" onClick={handleLogout}>
//       Logout
//     </Button>
//   )
// }

// export default LogoutButton

// components/LogoutButton.js
import { Button } from 'antd'
import { useAuth } from '../utils/auth'

const LogoutButton = () => {
  // const router = useRouter()
  const { setAuthToken } = useAuth()

  const handleLogout = () => {
    // Clear the localStorage token and perform any other logout logic
    // For example, you might want to perform a logout API request to invalidate the token on the server-side
    localStorage.removeItem('authToken')

    // Clear the authToken from the context
    setAuthToken('')

    // Redirect to the login page
    // router.push('/login')
  }

  return (
    <Button type="primary" onClick={handleLogout}>
      Logout
    </Button>
  )
}

export default LogoutButton
