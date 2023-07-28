import ManagerEmployeesPage from '@/components/ManagerTable'
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
