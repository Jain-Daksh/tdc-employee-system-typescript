import { MessageFilled } from '@ant-design/icons'
import { Space, Typography } from 'antd'
import Image from 'next/image'
import Image1 from '../../Images/vercel.svg'

const Navbar: React.FC = () => {
  return (
    <div className="AppHeader">
      <Image src={Image1} width={40} alt="image"></Image>
      <Typography.Title>Dashboard</Typography.Title>
      <Space>
        <MessageFilled></MessageFilled>
      </Space>
    </div>
  )
}

export default Navbar
