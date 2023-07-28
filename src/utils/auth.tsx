import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

interface Props {
  children: any
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [authToken, setAuthToken] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = window.localStorage.getItem('authtoken')
      setAuthToken(token)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
