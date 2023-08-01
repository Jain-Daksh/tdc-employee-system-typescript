// import { NextApiRequest, NextApiResponse } from 'next'
// import { createContext, useContext, useEffect, useState } from 'react'

// const AuthContext = createContext()

// interface Props {
//   children: any
//   req: NextApiRequest
//   res: NextApiResponse
// }

// const AuthProvider: React.FC<Props> = ({ children, req, res }) => {
//   const [authToken, setAuthToken] = useState('')

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       // const token = window.localStorage.getItem('authtoken')
//       const token = req.cookies.token
//       setAuthToken(token)
//     }
//   }, [])

//   return (
//     <AuthContext.Provider value={{ authToken, setAuthToken }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// const useAuth = () => useContext(AuthContext)

// export { AuthProvider, useAuth }

import { User } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { getUserByUsername } from './user'

async function validateUserCredentials(email: string, password: string) {
  const user = await getUserByUsername(email)
  if (user && (await bcrypt.compare(password, user.password))) {
    return user
  } else {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
}

export function issueToken(user: User) {
  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
    expiresIn: '1d' // Adjust the expiration time as needed
  })
  return token
}

export default validateUserCredentials

// ...

// const options = {
//   providers: [
//     Providers.Credentials({
//       // ... (previous options)
//       async authorize(credentials: { username: string; password: string }) {
//         const { username, password } = credentials;
//         const user = await getUserByUsername(username);

//         if (user && (await bcrypt.compare(password, user.password))) {
//           // If the user exists and the password matches, return the user object
//           return Promise.resolve(user);
//         } else {
//           return Promise.resolve(null);
//         }
//       },
//     }),
//   ],
//   // ... (other options)
// };

// ...
