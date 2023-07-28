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

import 'antd/dist/reset.css' // Import Ant Design CSS
import SIdeBar from '../components/SIdeBar'
import '../styles/common.css'
// import Login from './login'
import { useEffect, useState } from 'react'
import { AuthProvider } from '../utils/auth'
import Login from './login'
interface Props {
  Component: any
  pageProps: any
}

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  const [authToken, setAuthToken] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = window.localStorage.getItem('authToken')
      setAuthToken(token)
    }
  }, [])
  if (!authToken) {
    return <Login />
  } else {
    return (
      <AuthProvider>
        <SIdeBar>
          <Component {...pageProps} />
        </SIdeBar>
      </AuthProvider>
    )
  }
}

export default MyApp
