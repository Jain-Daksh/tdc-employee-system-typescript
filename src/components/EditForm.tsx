import { Form, Input, Modal } from 'antd'
import Axios from 'axios'
import { useEffect, useState } from 'react'

const PAGE_SIZE = 10

const EmployeesEditPage = ({ employees }) => {
  const [employeesData, setEmployeesData] = useState(employees)
  const [name, setName] = useState(employees.name)
  const [visible, setVisible] = useState(false)

  const [editModalVisible, setEditModalVisible] = useState(false)
  // const [selectedUser, setSelectedUser] = useState<Users | null>()
  // const [userEdit, setUserEdit] = useState<Users | null>()
  // const [editModalVisible, setEditModalVisible] = useState(false)
  const [editedUser, setEditedUser] = useState(employees)

  // const handleEditUser = (employee: any) => {
  //   setSelectedUser(employee)
  //   setEditedUser({ ...employee })
  //   setEditModalVisible(true)
  // }

  const handleCancelEdit = () => {
    setEditModalVisible(false)
    setEditedUser(null)
  }

  console.log('employeesData', employeesData)
  useEffect(() => {
    async function Editusers() {
      try {
        const response = await fetch('/api/editUser/:id')
        const data = await response.json()
        console.log('data', data)
        setEmployeesData(data)
      } catch (error) {
        console.error(error)
      }
    }
    Editusers()
  }, [])

  const handleSaveEdit = async (user: any) => {
    console.log('formData', employeesData)
    const data = {
      name: employeesData.name
      // email: formData.email,
      // password: formData.password,
      // organization: formData.organization
    }
    try {
      console.log('data', data)
      await Axios({
        method: 'PATCH',
        url: `/api/editUser?id=${user.id}`,
        data: data
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (response) {
          console.log(response)
        })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <Modal
        title="Edit User"
        visible={editModalVisible}
        onCancel={handleCancelEdit}
        onOk={handleSaveEdit}
      >
        <Form layout="vertical">
          <Form.Item label="Name">
            <Input value={name} onChange={e => setName(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default EmployeesEditPage
