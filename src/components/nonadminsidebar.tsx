import { Menu } from 'antd'
import Link from 'next/link'

const NonAdminSidebar = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
      <Menu.Item key="dashboard">
        <Link href="/">Dashboard Employee Table</Link>
      </Menu.Item>

      <Menu.Item key="Manager">
        <Link href="/manager-employee-table">Manager Employee Table</Link>
      </Menu.Item>
    </Menu>
  )
}

export default NonAdminSidebar
