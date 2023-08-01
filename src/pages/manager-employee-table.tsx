import ManagerEmployeesPage from '@/components/ManagerTable'
// import withAuth from '@/utils/PrivateRoute'
import ProtectedRoute from '@/utils/PrivateRoute'

const Users = () => {
  return (
    <ProtectedRoute>
      <div>
        <ManagerEmployeesPage />
      </div>
    </ProtectedRoute>
  )
}

export default Users

// // pages/Page1.tsx
// import withAuth from '../utils/PrivateRoute'

// const Page1: React.FC = () => {
//   return (
//     <div>
//       <h1>Page 1</h1>
//       <p>This is a protected page.</p>
//     </div>
//   )
// }

// export default withAuth(Page1)
