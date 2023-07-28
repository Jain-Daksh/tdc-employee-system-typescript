// import '@/styles/common.css'
// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import Sidebar from '@/components/SIdeBar'
import 'antd/dist/reset.css' // Import Ant Design CSS
import '../styles/common.css'
// import Login from './login'

interface Props {
  Component: any
  pageProps: any
}

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  const isLoggedIn = true
  // if (!isLoggedIn) {
  //   return <Login />
  // }
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  )
}

export default MyApp
