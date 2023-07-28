import AddUserFormReportee from '@/components/addUserReportee'
import ProtectedRoute from '@/utils/PrivateRoute'

const AddUserRole = () => {
  return (
    <ProtectedRoute>
      <div>
        <AddUserFormReportee />
      </div>
    </ProtectedRoute>
  )
}

export default AddUserRole
