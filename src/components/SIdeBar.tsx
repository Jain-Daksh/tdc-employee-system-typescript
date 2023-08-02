import { Layout, Menu } from 'antd'
import { useSession } from 'next-auth/react'
import AdminSidebar from './adminsidebar'
import NonAdminSidebar from './nonadminsidebar'
const { Header, Content, Sider } = Layout

interface MyLayoutProps {
  children?: React.ReactNode
}

const Sidebar = ({ children }: MyLayoutProps) => {
  const { data: session, status } = useSession()
  console.log('rolesc', session)
  const rol = session?.token?.role?.roleId
  console.log('rol', rol)
  return (
    <div className="sidebar">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={200} theme="light">
          <Menu defaultSelectedKeys={['1']} mode="inline">
            {rol === 3 ? <AdminSidebar /> : <NonAdminSidebar />}
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: '16px' }}>{children}</Content>
          <Header style={{ background: '#fff', padding: 0 }}>Header</Header>
        </Layout>
      </Layout>
    </div>
  )
}

export default Sidebar
