import AddUserFormNew from '@/components/add1'
import ProtectedRoute from '@/utils/PrivateRoute'

const AddUser = () => {
  return (
    <ProtectedRoute>
      <div>
        {/* <AddUsers name={''} email={''} password={''} organization={''} /> */}
        <AddUserFormNew />
      </div>
    </ProtectedRoute>
  )
}

export default AddUser
