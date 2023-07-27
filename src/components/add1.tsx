// import { PrismaClient } from '@prisma/client'
import { Button, Form, Input, Radio, message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'

// const prisma = new PrismaClient()

const AddUserFormNew: React.FC = () => {
  const [form] = Form.useForm()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    organization: '',
    roleId: ''
  })

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post('/api/addUser', formData)
      console.log(response)
      message.success('User added successfully!')
      form.resetFields()
    } catch (error) {
      console.error(error)
      message.error('Error adding user. Please try again later.')
    }
  }

  const handleRadioChange = (event: any) => {
    console.log('Selected Radio value:', event.target.value)
  }

  const onSubmitForm = async (e: any) => {
    try {
      const response = await axios.post('/api/addUser', formData)
      console.log(response)
      message.success('User added successfully!')
    } catch (error) {
      console.error('Error adding user:', error)
      message.error('Failed to add user.')
    }
  }
  return (
    // <Form form={form} layout="vertical" onFinish={onSubmitForm}>
    //   <Form.Item
    //     label="Name"
    //     name="name"
    //     rules={[{ required: true, message: 'Please enter the name' }]}
    //   >
    //     <Input prefix={<UserOutlined />} placeholder="Enter name" />
    //   </Form.Item>
    //   <Form.Item
    //     label="Age"
    //     name="age"
    //     rules={[{ required: true, message: 'Please enter the age' }]}
    //   >
    //     <Input type="number" placeholder="Enter age" />
    //   </Form.Item>
    //   <Form.Item
    //     label="Address"
    //     name="address"
    //     rules={[{ required: true, message: 'Please enter the address' }]}
    //   >
    //     <Input placeholder="Enter address" />
    //   </Form.Item>
    // <Form.Item
    //   label="Role"
    //   name="role"
    //   rules={[{ required: true, message: 'Please select the role' }]}
    // >
    //   <Select placeholder="Select role">
    //     <Select.Option value="1">Role 1</Select.Option>
    //     <Select.Option value="2">Role 2</Select.Option>
    //     <Select.Option value="3">Role 3</Select.Option>
    //   </Select>
    // </Form.Item>
    //   <Form.Item>
    //     <Button type="primary" htmlType="submit">
    //       Add User
    //     </Button>
    //   </Form.Item>
    // </Form>
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
      {/* <Form.Item
        label="Role"
        name="roleId"
        rules={[{ required: true, message: 'Please select the role' }]}
      >
        <Select placeholder="Select role">
          <Select.Option value="1">Manager</Select.Option>
          <Select.Option value="2">Employee</Select.Option>
        </Select>
        <Input
          value={formData.roleId}
          onChange={e => setFormData({ ...formData, roleId: e.target.value })}
        />
      </Form.Item> */}
      <Form.Item
        label="Role"
        name="roleId"
        rules={[{ required: true, message: 'Please select the role' }]}
      >
        <Radio.Group
          value={formData.roleId}
          onChange={e => setFormData({ ...formData, roleId: e.target.value })}
        >
          <Radio value="1">Manager</Radio>
          <Radio value="2">Employee</Radio>
        </Radio.Group>
        {/* <Select placeholder="Select role">
          <Select.Option value="2">Manager</Select.Option>
          <Select.Option value="1">Employee</Select.Option>
        </Select> */}
      </Form.Item>
      <Form.Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddUserFormNew
