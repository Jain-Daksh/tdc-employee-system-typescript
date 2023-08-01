import { Menu } from 'antd'
import Link from 'next/link'

const AdminSidebar = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
      <Menu.Item key="dashboard">
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="user-profile">
        <Link href="/user-table"> User Table</Link>
      </Menu.Item>
      <Menu.Item key="addUser">
        <Link href="/add-user">Add User</Link>
      </Menu.Item>
      <Menu.Item key="Manager">
        <Link href="/manager-employee-table">Manager Employee Table</Link>
      </Menu.Item>
      <Menu.Item key="Reportee">
        <Link href="/add-user-role">Add Reportee</Link>
      </Menu.Item>
    </Menu>
  )
}

export default AdminSidebar
