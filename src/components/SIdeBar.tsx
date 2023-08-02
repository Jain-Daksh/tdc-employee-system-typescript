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

        {/* Main Content */}
        <Layout>
          <Content style={{ padding: '16px' }}>{children}</Content>
          <Header style={{ background: '#fff', padding: 0 }}>Header</Header>
        </Layout>
      </Layout>
    </div>
  )
}

export default Sidebar

// import { Layout, Menu } from 'antd'
// import { Session } from 'next-auth'
// import { useSession } from 'next-auth/react'
// import AdminSidebar from './adminsidebar'
// import NonAdminSidebar from './nonadminsidebar'
// const { Header, Content, Sider } = Layout

// interface MyLayoutProps {
//   children?: React.ReactNode
// }

// const Sidebar = ({ children }: MyLayoutProps) => {
//   // const { data: session, status } = useSession()
//   const { data: session, status } = useSession<Session>()
//   if (status === 'loading') {
//     return <div>Loading...</div>
//   }
//   if (!session) {
//     return <div>Sign in</div>
//   }
//   return (
//     <div className="sidebar">
//       <Layout style={{ minHeight: '100vh' }}>
//         <Sider width={200} theme="light">
//           <Menu defaultSelectedKeys={['1']} mode="inline">
//             {session?.token?.token?.user?.roleId === 3 ? (
//               <AdminSidebar />
//             ) : (
//               <NonAdminSidebar />
//             )}
//           </Menu>
//         </Sider>

//         {/* Main Content */}
//         <Layout>
//           <Content style={{ padding: '16px' }}>{children}</Content>
//           <Header style={{ background: '#fff', padding: 0 }}>Header</Header>
//         </Layout>
//       </Layout>
//     </div>
//   )
// }

// export default Sidebar

// import { useSession } from 'next-auth/react'
// import { Session } from 'next-auth'

// // ... rest of the code ...

// const Sidebar = ({ children }: MyLayoutProps) => {
//   const { data: session, status } = useSession<Session>()

//   // Check if the session is loading or if there's no session data yet
//   if (status === 'loading') {
//     return <div>Loading...</div>
//   }

//   // If the session is not loading and there's no user session, show a login button or redirect to the login page.
//   if (!session) {
//     return (
//       <div>
//         Please <a href="/api/auth/signin">sign in</a>
//       </div>
//     )
//   }

//   // If the session exists, you can safely access its properties.
//   return (
//     <div className="sidebar">
//       <Layout style={{ minHeight: '100vh' }}>
//         <Sider width={200} theme="light">
//           <Menu defaultSelectedKeys={['1']} mode="inline">
//             {session.token?.user?.roleId === 3 ? (
//               <AdminSidebar />
//             ) : (
//               <NonAdminSidebar />
//             )}
//           </Menu>
//         </Sider>

//         {/* Main Content */}
//         <Layout>
//           <Content style={{ padding: '16px' }}>{children}</Content>
//           <Header style={{ background: '#fff', padding: 0 }}>Header</Header>
//         </Layout>
//       </Layout>
//     </div>
//   )
// }

// export default Sidebar
