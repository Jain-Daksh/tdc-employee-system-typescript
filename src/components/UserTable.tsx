// import React from 'react'

// const UserTable = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default UserTable

// import { UserOutlined } from '@ant-design/icons'
// import { Button, Form, Input, Modal, Table } from 'antd'
// import { useEffect, useState } from 'react'
// // import Header from './common/Header'

// // interface User : {
// //   user: any
// // }

// const UserTable = () => {
//   // const [users, setUsers] = useState([])
//   const [users, setUsers] = useState<User[]>([])
//   const [visible, setVisible] = useState(false)
//   const [selectedUser, setSelectedUser] = useState(users)
//   const [EditUSer, setEditUser] = useState(users)

//   // const [viewModalVisible, setViewModalVisible] = useState(false);
//   // const [editModalVisible, setEditModalVisible] = useState(false);
//   // const [selectedUser, setSelectedUser] = useState<User | null>(null);
//   // const [editedUser, setEditedUser] = useState<User | null>(null);

//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name'
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email'
//     },
//     {
//       title: 'Organization',
//       dataIndex: 'organization',
//       key: 'organization'
//     },
//     {
//       title: 'Actions',
//       dataIndex: 'actions',
//       key: 'actions',
//       render: (_, user) => (
//         <>
//           <Button icon={<UserOutlined />} onClick={() => handleViewUser(user)}>
//             View
//           </Button>
//           <Button
//             icon={<UserOutlined />}
//             onClick={() => handleEditUser(user)}
//             style={{ marginLeft: 8 }}
//           >
//             Edit
//           </Button>
//         </>
//       )
//     }
//   ]
//   useEffect(() => {
//     async function fetchUsers() {
//       try {
//         const response = await fetch('/api/getUsers')
//         const data = await response.json()
//         console.log('data', data)
//         setUsers(data)
//       } catch (error) {
//         console.error(error)
//       }
//     }
//     fetchUsers()
//   }, [])
//   console.log(users)
//   // console.log(users.data.email)
//   const handleViewUser = user => {
//     setSelectedUser(user)
//     setVisible(true)
//   }

//   const handleEditUser = user => {
//     setSelectedUser(user)
//     setVisible(true)
//   }

//   const handleCancel = () => {
//     setSelectedUser(null)
//     setVisible(false)
//   }
//   // const handleSaveEdit = () => {
//   //   // Save the edited user to the backend using API call
//   //   // For this example, we'll just update the user in the local state
//   //   if (EditUSer) {
//   //     setUsers(prevUsers => {
//   //       const updatedUsers = prevUsers.map(user =>
//   //         user.id === EditUSer.id ? { ...user, ...EditUSer } : user
//   //       )
//   //       return updatedUsers
//   //     })
//   //     setVisible(false)
//   //     setEditUser(null)
//   //   }
//   // }

//   // const handleViewUser = (user: User) => {
//   //   setSelectedUser(user)
//   //   setViewModalVisible(true)
//   // }

//   // const handleEditUser = (user: User) => {
//   //   setSelectedUser(user)
//   //   setEditedUser({ ...user })
//   //   setEditModalVisible(true)
//   // }

//   // const handleCancelView = () => {
//   //   setViewModalVisible(false)
//   // }

//   // const handleCancelEdit = () => {
//   //   setEditModalVisible(false)
//   //   setEditedUser(null)
//   // }

//   // const handleSaveEdit = () => {
//   //   // Save the edited user to the backend using API call
//   //   // For this example, we'll just update the user in the local state
//   //   if (editedUser) {
//   //     setUsers(prevUsers => {
//   //       const updatedUsers = prevUsers.map(user =>
//   //         user.id === editedUser.id ? { ...user, ...editedUser } : user
//   //       )
//   //       return updatedUsers
//   //     })
//   //     setEditModalVisible(false)
//   //     setEditedUser(null)
//   //   }
//   // }

//   return (
//     <>
//       {/* <Header title="Employee" subtitle="Entire list " /> */}
//       <Table dataSource={users} columns={columns} />

//       <Modal
//         title="User Details"
//         open={visible}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         {selectedUser && (
//           <Form layout="vertical">
//             <Form.Item label="Name">
//               <Input value={selectedUser.name} readOnly />
//             </Form.Item>
//             <Form.Item label="Email">
//               <Input value={selectedUser.email} readOnly />
//             </Form.Item>
//           </Form>
//         )}
//       </Modal>
//       <Modal
//         title="User Details"
//         open={visible}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         {EditUSer && (
//           <Form layout="vertical">
//             <Form.Item label="Name">
//               <Input value={selectedUser.name} readOnly />
//             </Form.Item>
//             <Form.Item label="Email">
//               <Input value={selectedUser.email} readOnly />
//             </Form.Item>
//           </Form>
//         )}
//       </Modal>
//     </>
//   )
// }

// export default UserTable

import { UserOutlined } from '@ant-design/icons'
import { Button, Form, Modal, Pagination, Table } from 'antd'
import Input from 'rc-input'
import { useEffect, useState } from 'react'

const PAGE_SIZE = 10

const EmployeesPage: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([])
  const [totalEmployees, setTotalEmployees] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const [visible, setVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState<any[] | null>(employees)

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
  console.log(employees)

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
          {/* <Button
            icon={<UserOutlined />}
            onClick={() => handleEditUser(user)}
            style={{ marginLeft: 8 }}
          >
            Edit
          </Button> */}
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
          </Form>
        )}
      </Modal>
    </>
  )
}

export default EmployeesPage
