import { Form, Modal, Pagination, Table } from 'antd'
import axios from 'axios'
import Input from 'rc-input'
import { useEffect, useState } from 'react'

const PAGE_SIZE = 10
interface Users {
  id: string
  name: string
  email: string
  organization: string
}

const ManagerEmployeesPage: React.FC = () => {
  const [employees, setEmployees] = useState<Users[]>([])
  const [totalEmployees, setTotalEmployees] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const [visible, setVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState<Users | null>()

  const handleCancel = () => {
    setSelectedUser(null)
    setVisible(false)
  }


  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('/api/reportee/')
        setEmployees(response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

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
      dataIndex: ['reportee', 'name'],
      key: 'name'
    },
    {
      title: 'Organization',
      dataIndex: ['reportee', 'organization'],
      key: 'organization'
    },
    {
      title: 'Email',
      dataIndex: ['reportee', 'email'],
      key: 'email'
    },
    {
      title: 'Manager Name',
      dataIndex: ['manager', 'name'],
      key: 'name'
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
    </>
  )
}

export default ManagerEmployeesPage
