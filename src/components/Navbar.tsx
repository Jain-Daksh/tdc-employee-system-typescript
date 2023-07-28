import { Space, Typography } from 'antd'
import axios from 'axios'
import Image from 'next/image'
import Image1 from '../../Images/vercel.svg'

const Navbar: React.FC = () => {
  // const handleLogout = () => {
  //   console.log('clicked')
  //   localStorage.removeItem('authtoken')
  // }
  const logout = async () => {
    try {
      console.log('clicked')
      await axios.post('/api/logout')
      localStorage.removeItem('authtoken')
    } catch (error) {
      console.error('Logout error:', error)
    }
    // localStorage.removeItem('authtoken')
  }
  return (
    <div className="AppHeader">
      <Image src={Image1} width={40} alt="image"></Image>
      <Typography.Title>Dashboard</Typography.Title>
      <Space>
        {/* <MessageFilled onClick={handleLogout}>Log</MessageFilled> */}
        {/* <button onClick={logout}>Logout</button> */}
        <button onClick={logout}>Logout</button>
      </Space>
    </div>
  )
}

export default Navbar
