import { Button, Form, Input, message } from 'antd'
import axios from 'axios'
import { useState } from 'react'
interface User {
  name: string
  email: string
  password: string
  organization: string
}
const AddUsers: React.FC<User> = ({ name, email, password, organization }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    organization: ''
  })

  const onSubmitForm = async (e: any) => {
    try {
      const response = await axios.post('/api/addUser', formData)
      console.log(response)
      message.success('User added successfully!')
    } catch (error) {
      console.error('Error adding user:', error)
      message.error('Failed to add user. User Already exist')
    }
  }

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }

  return (
    <Form
      name="wrap"
      labelCol={{ flex: '110px' }}
      labelAlign="left"
      labelWrap
      wrapperCol={{ flex: 1 }}
      colon={false}
      style={{ maxWidth: 600 }}
      onFinish={onSubmitForm}
    >
      <Form.Item label="Name" name="Name" rules={[{ required: true }]}>
        <Input
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label="organization"
        name="organization"
        rules={[{ required: true }]}
      >
        <Input
          value={formData.organization}
          onChange={e =>
            setFormData({ ...formData, organization: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item
        label="email"
        name="email"
        rules={[{ type: 'email', required: true }]}
      >
        <Input
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
      </Form.Item>
      <Form.Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddUsers
