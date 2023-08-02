import { DeleteOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, Modal, Pagination, Table } from 'antd'
import axios from 'axios'
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
  const [editingUser, setEditingUser] = useState(null)
  const [visible, setVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState<Users | null>()
  const [userEdit, setUserEdit] = useState<Users | null>()

  const [editModalVisible, setEditModalVisible] = useState(false)
  const [editedUser, setEditedUser] = useState<Users | null>(null)
  const [formData, setFormData] = useState([])
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
        const response = await axios.get('/api/user/')
        setEmployees(response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  const handleDeleteUser = async (user: any) => {
    try {
      await fetch(`/api/user?id=${user.id}`, {
        method: 'DELETE'
      })
      setEmployees(employees => employees.filter(u => u.id !== user.id))
    } catch (error) {
      console.error(error)
    }
  }
  const handlePageChange = (page: number) => {
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
    {
      title: 'Organization',
      dataIndex: 'organization',
      key: 'organization'
    },
    {
      title: 'Role',
      dataIndex: ['role', 'role'],
      key: 'role'
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
          // pageSize={PAGE_SIZE}
          pageSize={5}
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
    </>
  )
}

export default EmployeesPage
