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

// import { NextApiRequest, NextApiResponse } from 'next'
// import { useRouter } from 'next/router'
// import { useState } from 'react'
// import { verifyToken } from './authVerify'
// interface Props {
//   children: any
//   req: NextApiRequest
//   res: NextApiResponse
// }
// const ProtectedRoute = ({ children, req, res }) => {
//   const [authToken, setAuthToken] = useState('')

//   const router = useRouter()
//   // useEffect(() => {
//   //   const token = window?.localStorage?.getItem('authtoken')
//   //   setAuthToken(token)
//   //   if (!token) {
//   //     router.push('/login')
//   //   }
//   // }, [])
//   const { token } = req.cookies
//   // const token = req.cookies.token
//   const decodedToken = verifyToken(token)
//   // const { req } = context

//   if (!decodedToken) {
//     router.push('/login')
//     // return <div>Loading...</div>
//   }
//   return <>{children}</>
// }

// export async function getServerSideProps(context: { req: any }) {
//   const { req } = context
//   const token = req.cookies.token

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false
//       }
//     }
//   }

//   const decodedToken = verifyToken(token)

//   if (!decodedToken) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false
//       }
//     }
//   }

//   const user = {
//     id: decodedToken.userId,
//     email: decodedToken.email,
//     password: decodedToken.password
//   }
//   return {
//     props: { user }
//   }
// }

// export default ProtectedRoute

// lib/withAuth.tsx
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { verifyToken } from './auth';

// const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
//   const AuthComponent: React.FC<P> = (props) => {
//     const router = useRouter();

//     // Put your authentication logic here
//     useEffect(() => {
//       const token = sessionStorage.getItem('token'); // Use sessionStorage to get the token
//       if (!token || !verifyToken(token)) {
//         router.push('/login');
//       }
//     }, []);

//     return <WrappedComponent {...props} />;
//   };

//   return AuthComponent;
// };

// export default withAuth;

// lib/withAuth.tsx
// import { useRouter } from 'next/router'
// import { useEffect } from 'react'
// import { verifyToken } from './authVerify'

// const withAuth = <P extends object>(
//   WrappedComponent: React.ComponentType<P>
// ) => {
//   const AuthComponent: React.FC<P> = props => {
//     const router = useRouter()

//     useEffect(() => {
//       const token = sessionStorage.getItem('token')
//       console.log('s', sessionStorage.getItem('token'))

//       if (!token || !verifyToken(token)) {
//         router.push('/login')
//       }
//     }, [])

//     return <WrappedComponent {...props} />
//   }

//   return AuthComponent
// }

// export default withAuth
