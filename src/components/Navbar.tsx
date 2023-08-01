import { Space, Typography } from 'antd'
import Image from 'next/image'
import { LogoutOutlined } from '@ant-design/icons'
import Image1 from '../../Images/vercel.svg'

const Navbar: React.FC = () => {
  const handleLogout = () => {
    console.log('clic')
    localStorage.clear()
  }
  const handleLogouqt = () => {
    localStorage.removeItem('authtoken')
  }

  const logout = () => {
    console.log('clicked')
    localStorage.removeItem('authtoken')
  }
  function handleClick() {
    console.log('test')
  }

  return (
    <div className="AppHeader">
      <Image src={Image1} width={40} alt="image"></Image>
      <Typography.Title>Dashboard</Typography.Title>
      <Space>
        <LogoutOutlined onClick={handleLogouqt}>Log Out</LogoutOutlined>
      </Space>
    </div>
  )
}

export default Navbar
