import AddUserFormNew from '@/components/add1'
import AddUserFormReportee from '@/components/addUserReportee'
import ProtectedRoute from '@/utils/PrivateRoute'

const AddUser = () => {
  return (
    <ProtectedRoute>
      <div>
        {/* <AddUsers name={''} email={''} password={''} organization={''} /> */}
        <AddUserFormNew />
        <AddUserFormReportee />
      </div>
    </ProtectedRoute>
  )
}

export default AddUser
