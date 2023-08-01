import { NextApiRequest, NextApiResponse } from 'next'
import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

interface Props {
  children: any
  req: NextApiRequest
  res: NextApiResponse
}

const AuthProvider: React.FC<Props> = ({ children, req, res }) => {
  const [authToken, setAuthToken] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // const token = window.localStorage.getItem('authtoken')
      const token = req.cookies.token
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
