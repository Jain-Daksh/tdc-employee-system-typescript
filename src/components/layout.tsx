import { Layout } from 'antd'
import { ReactNode } from 'react'
import Sidebar from './SIdeBar'

const { Content } = Layout

interface MyLayoutProps {
  children: ReactNode
}
const MainLayout = ({ children }: MyLayoutProps) => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
