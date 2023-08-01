import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect, useState } from 'react'
import Sidebar from './SIdeBar'

const LayoutPage: FC<{ children: ReactNode }> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = window.localStorage.getItem('authtoken')
      setAuthToken(token)
    }
  }, [])

  const router = useRouter()

  const isLoginPage = router.pathname === '/login'

  return (
    <div>
      {authToken && !isLoginPage && <Sidebar children={undefined} />}
      <main className="content">{children}</main>
    </div>
  )
}

export default LayoutPage
