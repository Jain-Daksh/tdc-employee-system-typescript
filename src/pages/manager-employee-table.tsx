import ManagerEmployeesPage from '@/components/ManagerTable'
import ProtectedRoute from '@/utils/privateRoute'

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
