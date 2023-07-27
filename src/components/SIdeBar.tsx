import { Layout, Menu } from 'antd'

const { Sider, Content } = Layout

interface Props {
  children: any
}

const Sidebar: React.FC<Props> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="light">
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          {/* Add your sidebar items here */}
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Users</Menu.Item>
          <Menu.Item key="3">Settings</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: '20px' }}>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default Sidebar
