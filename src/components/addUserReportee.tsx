import { Button, Form, Input, message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'

const AddUserFormReportee: React.FC = () => {
  const [formData, setFormData] = useState({
    reporteeId: '',
    managerId: ''
  })

  const onSubmitForm = async (e: any) => {
    try {
      const response = await axios.post('/api/addReportee', formData)
      console.log(response)
      message.success('User added successfully!')
    } catch (error) {
      console.error('Error adding user:', error)
      message.error('Failed to add user.')
    }
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
      <Form.Item label="Manager" name="managerId" rules={[{ required: true }]}>
        <Input
          value={formData.managerId}
          onChange={e =>
            setFormData({ ...formData, managerId: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item
        label="organization"
        name="organization"
        rules={[{ required: true }]}
      >
        <Input
          value={formData.reporteeId}
          onChange={e =>
            setFormData({ ...formData, reporteeId: e.target.value })
          }
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

export default AddUserFormReportee
