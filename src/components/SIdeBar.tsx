import { Layout, Menu } from 'antd'
import Link from 'next/link'

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

const Sidebar: React.FC<Props> = ({ children }) => {
  function handleClick() {
    console.log('test')
    localStorage.removeItem('authtoken')
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="light">
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          {/* <Link href="/">
            <Menu.Item key="1">Dashboard</Menu.Item>
          </Link>
          <Link href="/">
            <Menu.Item key="1">User</Menu.Item>
          </Link>
          <Link href="/">
            <Menu.Item key="1">Add</Menu.Item>
          </Link> */}
          {/* <Menu.Item key="1"></Menu.Item>
          <Menu.Item key="2">Users</Menu.Item>
          <Menu.Item key="3">Settings</Menu.Item> */}
          {sidebar.map(value => (
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
