import { Layout, Menu } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { verifyUserToken } from '../utils/authVerify'
const { Sider, Content } = Layout

interface Props {
  children: any
}

const sidebar = [
  {
    id: 1,
    key: 1,
    link: '/',
    Name: 'Home'
  },
  {
    id: 2,
    key: 2,
    link: '/add-user',
    Name: 'Add User'
  },
  {
    id: 3,
    key: 3,
    link: '/user-table',
    Name: 'User Table'
  },
  {
    id: 4,
    key: 4,
    link: '/add-user-role',
    Name: 'Add Reportee'
  },
  {
    id: 5,
    key: 5,
    link: '/manager-employee-table',
    Name: 'Manager Employee  Table'
  }
]

const adminLinks = [
  {
    id: 1,
    key: 1,
    link: '/',
    Name: 'Home'
  },
  {
    id: 2,
    key: 2,
    link: '/add-user',
    Name: 'Add User'
  },
  {
    id: 3,
    key: 3,
    link: '/user-table',
    Name: 'User Table'
  },
  {
    id: 4,
    key: 4,
    link: '/add-user-role',
    Name: 'Add Reportee'
  },
  {
    id: 5,
    key: 5,
    link: '/manager-employee-table',
    Name: 'Manager Employee  Table'
  }
]

const nonAdminLinks = [
  {
    id: 1,
    key: 1,
    link: '/',
    Name: 'Home'
  },
  {
    id: 2,
    key: 2,
    link: '/manager-employee-table',
    Name: 'Manager Employee  Table'
  }
]

const Sidebar: React.FC<Props> = ({ children }) => {
  const [role, setRole] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {

  //     const userRole = localStorage.getItem('admin')
  //     setRole(userRole)
  //   }
  // }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('authtoken')
      console.log(token)
      const decodedToken: any = verifyUserToken(token)
      console.log('decodedToken', decodedToken)
      // const userRole = decodedToken.role
      // setIsAdmin(userRole === 'admin')

      // const userRole = localStorage.getItem('authtoken')
      // const decodedToken: any = verifyToken('authtoken')
      // console.log('decodedToken', decodedToken)
      // const userRoles = decodedToken
      // const role = userRole
      // console.log('role effect', userRoles)
      setRole(role)
    }
  }, [])
  console.log('role', role)
  const sidebarLinks = role === 'true' ? adminLinks : nonAdminLinks

  function handleClick() {
    console.log('test')
    localStorage.removeItem('authtoken')
    localStorage.removeItem('admin')
  }
  return (
    <Layout className="" style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="light">
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          {sidebarLinks.map(value => (
            <Link key={value.id} href={value.link}>
              <Menu.Item key={value.key}>{value.Name}</Menu.Item>
            </Link>
          ))}
        </Menu>
        <br />
        <hr />
        <button onClick={handleClick}>LogOUT</button>
      </Sider>
      <Layout>
        <Content style={{ padding: '20px' }}>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default Sidebar
