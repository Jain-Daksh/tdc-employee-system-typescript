import AddUserFormReportee from '@/components/addUserReportee'
import ProtectedRoute from '@/utils/privateRoute'

const AddUser = () => {
  return (
    <ProtectedRoute>
      <div>
        {/* <AddUsers name={''} email={''} password={''} organization={''} /> */}
        {/* <AddUserFormNew /> */}
        <AddUserFormReportee />
      </div>
    </ProtectedRoute>
  )
}

export default AddUser
