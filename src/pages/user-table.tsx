import EmployeesPage from '@/components/UserTable'
import ProtectedRoute from '@/utils/privateRoute'

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
