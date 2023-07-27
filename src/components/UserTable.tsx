import { DeleteOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Modal, Pagination, Table } from 'antd'
import Input from 'rc-input'
import { useEffect, useState } from 'react'

const PAGE_SIZE = 10
interface Users {
  id: string
  name: string
  email: string
  organization: string
}

const EmployeesPage: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([])
  const [totalEmployees, setTotalEmployees] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const [visible, setVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState<Users | null>()
  const [userEdit, setUserEdit] = useState<Users | null>()

  const [editModalVisible, setEditModalVisible] = useState(false)
  const [editedUser, setEditedUser] = useState<Users | null>(null)

  const handleCancel = () => {
    setSelectedUser(null)
    setVisible(false)
  }
  const handleViewUser = (employee: any) => {
    setSelectedUser(employee)
    setVisible(true)
  }

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/getUser')
        const data = await response.json()
        console.log('data', data)
        setEmployees(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsers()
  }, [])

  const handleEditUser = (employee: Users) => {
    setSelectedUser(employee)
    setEditedUser({ ...employee })
    setEditModalVisible(true)
  }

  const handleCancelEdit = () => {
    setEditModalVisible(false)
    setEditedUser(null)
  }

  useEffect(() => {
    async function Editusers() {
      try {
        const response = await fetch('/api/editUser/:id')
        const data = await response.json()
        console.log('data', data)
        setEmployees(data)
      } catch (error) {
        console.error(error)
      }
    }
    Editusers()
  }, [])

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch('/api/deleteUser/:id')
      setEmployees(employees.filter(employees => employees.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteUser = async (user: Users) => {
    try {
      await fetch(`/api/deleteUser?id=${user.id}`, {
        method: 'DELETE'
      })
      setEmployees(employees => employees.filter(u => u.id !== user.id))
    } catch (error) {
      console.error(error)
    }
  }
  const handleSaveEdit = () => {
    if (editedUser) {
      setEmployees(prevUsers => {
        const updatedUsers = prevUsers.map(user =>
          user.id === editedUser.id ? { ...user, ...editedUser } : user
        )
        return updatedUsers
      })
      setEditModalVisible(false)
      setEditedUser(null)
    }
  }

  const handlePageChange = (page: any) => {
    setCurrentPage(page)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    // {
    //   title: 'is_admin',
    //   dataIndex: 'is_admin',
    //   key: 'is_admin'
    // },
    {
      title: 'Organization',
      dataIndex: 'organization',
      key: 'organization'
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_: any, employees: string) => (
        <>
          <Button
            icon={<UserOutlined />}
            onClick={() => handleViewUser(employees)}
          >
            View
          </Button>
          <Button
            icon={<UserOutlined />}
            onClick={() => handleEditUser(employees)}
            style={{ marginLeft: 8 }}
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteUser(employees)}
            danger
          >
            Delete
          </Button>
        </>
      )
    }
  ]

  return (
    <>
      <div>
        <h1>Employee List</h1>
        <Table dataSource={employees} columns={columns} pagination={false} />
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          total={totalEmployees}
          pageSize={PAGE_SIZE}
        />
      </div>
      <Modal
        title="User Details"
        open={visible}
        onCancel={handleCancel}
        footer={null}
      >
        {selectedUser && (
          <Form layout="vertical">
            <Form.Item label="Name">
              <Input value={selectedUser.name} readOnly />
            </Form.Item>
            <Form.Item label="Email">
              <Input value={selectedUser.email} readOnly />
            </Form.Item>
            <Form.Item label="Organization">
              <Input value={selectedUser.organization} readOnly />
            </Form.Item>
          </Form>
        )}
      </Modal>
      <Modal
        title="Edit User"
        visible={editModalVisible}
        onCancel={handleCancelEdit}
        onOk={handleSaveEdit}
      >
        {editedUser && (
          <Form layout="vertical">
            <Form.Item label="Name">
              <Input
                value={editedUser.name}
                onChange={e =>
                  setEditedUser({ ...editedUser, name: e.target.value })
                }
              />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </>
  )
}

export default EmployeesPage
