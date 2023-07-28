// import '@/styles/common.css'
// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// import 'antd/dist/reset.css' // Import Ant Design CSS
// import SIdeBar from '../components/SIdeBar'
// import '../styles/common.css'
// // import Login from './login'

// interface Props {
//   Component: any
//   pageProps: any
// }

// const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
//   const isLoggedIn = true
//   // if (!isLoggedIn) {
//   //   return <Login />
//   // }
//   return (
//     <SIdeBar>
//       <Component {...pageProps} />
//     </SIdeBar>
//   )
// }

// export default MyApp

import Sidebar from '@/components/SIdeBar'
import 'antd/dist/reset.css' // Import Ant Design CSS
import { useEffect, useState } from 'react'
import '../styles/common.css'
import Home from './Home'
import Login from './login'

interface Props {
  Component: any
  pageProps: any
  onLogout: any
  onLogin: any
}
const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [adminIn, setAdminIn] = useState(false)


  useEffect(() => {
    const token = localStorage.getItem('authtoken')
    const admin = localStorage.getItem('admin')
    if (token) {
      setLoggedIn(true)
    }
  }, [])

  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setLoggedIn(false)
  }

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <Sidebar>
            <Component {...pageProps} />
          </Sidebar>
          <Home onLogout={handleLogout} />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  )
}
export default MyApp
