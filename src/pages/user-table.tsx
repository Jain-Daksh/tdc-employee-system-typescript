import EmployeesPage from '@/components/UserTable'
import ProtectedRoute from '@/utils/PrivateRoute'

const Users = () => {
  return (
    <ProtectedRoute>
      <div>
        <EmployeesPage />
      </div>
    </ProtectedRoute>
  )
}

export default Users
