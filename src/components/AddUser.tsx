// import type { FormInstance } from 'antd'
// import { Button, Form, Input, Space } from 'antd'
// import React from 'react'

// const SubmitButton = ({ form }: { form: FormInstance }) => {
//   const [submittable, setSubmittable] = React.useState(false)

//   // Watch all values
//   const values = Form.useWatch([], form)

//   React.useEffect(() => {
//     form.validateFields({ validateOnly: true }).then(
//       () => {
//         setSubmittable(true)
//       },
//       () => {
//         setSubmittable(false)
//       }
//     )
//   }, [values])

//   return (
//     <Button type="primary" htmlType="submit" disabled={!submittable}>
//       Submit
//     </Button>
//   )
// }

// const AddUserFrom: React.FC = () => {
//   const [form] = Form.useForm()

//   return (
//     <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
//       <Form.Item name="name" label="Name" rules={[{ required: true }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item name="age" label="Age" rules={[{ required: true }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item>
//         <Space>
//           <SubmitButton form={form} />
//           <Button htmlType="reset">Reset</Button>
//         </Space>
//       </Form.Item>
//     </Form>
//   )
// }

// export default AddUserFrom

// import React, { useState } from 'react'
// import { Button, Form, Input, InputNumber } from 'antd'

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 }
// }

// /* eslint-disable no-template-curly-in-string */
// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!'
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}'
//   }
// }
// /* eslint-enable no-template-curly-in-string */

// const onFinish = (values: any) => {
//   console.log(values)
// }

// interface User  {
//   name: string,
//   email : string,
//   password: string,
//   organization: string
// }

// const AddUserFrom: React.FC<User> = ({name, email, password, organization}) => (
//   // const [userForm, setUserFrom] = useState({
//   //    name: '',
//   //   email: '',
//   //   password: '',
//   //   organization: ''
//   // })

//   const [form, setForm] = useState({
//     name: '',
//     email: '',

//   })

//   <Form
//     {...layout}
//     name="nest-messages"
//     onFinish={onFinish}
//     style={{ maxWidth: 600 }}
//     validateMessages={validateMessages}
//   >
//     <Form.Item
//       name={['user', 'name']}
//       label="Name"
//       rules={[{ required: true }]}
//     >
//       <Input />
//     </Form.Item>
//     <Form.Item
//       name={['user', 'email']}
//       label="Email"
//       rules={[{ type: 'email' }]}
//     >
//       <Input />
//     </Form.Item>
//     <Form.Item name={['user', 'introduction']} label="organization">
//       <Input.TextArea />
//     </Form.Item>
//     <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>
// )

// export default AddUserFrom

// components/AddUserForm.js

import { Button, Form, Input, message } from 'antd'
import axios from 'axios'
import { useState } from 'react'
interface User {
  name: string
  email: string
  password: string
  organization: string
}
const AddUserForm: React.FC<User> = ({
  name,
  email,
  password,
  organization
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    organization: ''
  })
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!'
    },
    number: {
      range: '${label} must be between ${min} and ${max}'
    }
  }
  const onFinish = (values: any) => {
    console.log(values)
  }
  const onSubmitForm = async (e: any) => {
    // e.preventDefault()
    try {
      const response = await axios.post('/api/addUser', formData)
      console.log(response)
      message.success('User added successfully!')
    } catch (error) {
      console.error('Error adding user:', error)
      message.error('Failed to add user.')
    }
  }
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }

  return (
    // <form onSubmit={onSubmitForm}>
    //   <div>
    //     <label>email</label>
    //     <input
    //       type="text"
    //       aria-label="email field"
    //       name="email"
    //       value={formData.email}
    //       onChange={e => setFormData({ ...formData, email: e.target.value })}
    //     />
    //   </div>
    //   <div>
    //     <label>password</label>
    //     <input
    //       type="password"
    //       aria-label="password field"
    //       name="password"
    //       value={formData.password}
    //       onChange={e => setFormData({ ...formData, password: e.target.value })}
    //     />
    //   </div>
    //   <div>
    //     <label>name</label>
    //     <input
    //       type="name"
    //       aria-label="Confirm password field"
    //       name="name"
    //       value={formData.name}
    //       onChange={e => setFormData({ ...formData, name: e.target.value })}
    //     />
    //   </div>
    //   <div>
    //     <label>Org</label>
    //     <input
    //       type="name"
    //       aria-label="Confirm password field"
    //       name="organization"
    //       value={formData.organization}
    //       onChange={e =>
    //         setFormData({ ...formData, organization: e.target.value })
    //       }
    //     />
    //   </div>
    //   <div>
    //     <button type="submit">Login</button>
    //   </div>
    // </form>
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onSubmitForm}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      <div>
        <label>email</label>
        <input
          type="text"
          aria-label="email field"
          name="email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[{ type: 'email' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['password', 'password']}
        label="password"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="organization">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddUserForm

// import { LockOutlined, UserOutlined } from '@ant-design/icons'
// import { Button, Checkbox, Form, Input } from 'antd'
// import React from 'react'

// const AddUserFrom: React.FC = () => {
//   const onFinish = (values: any) => {
//     console.log('Received values of form: ', values)
//   }

//   return (
//     <Form
//       name="normal_login"
//       className="login-form"
//       initialValues={{ remember: true }}
//       onFinish={onFinish}
//     >
//       <Form.Item
//         name="username"
//         rules={[{ required: true, message: 'Please input your Username!' }]}
//       >
//         <Input
//           prefix={<UserOutlined className="site-form-item-icon" />}
//           placeholder="Username"
//         />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[{ required: true, message: 'Please input your Password!' }]}
//       >
//         <Input
//           prefix={<LockOutlined className="site-form-item-icon" />}
//           type="password"
//           placeholder="Password"
//         />
//       </Form.Item>
//       <Form.Item>
//         <Form.Item name="remember" valuePropName="checked" noStyle>
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>

//         <a className="login-form-forgot" href="">
//           Forgot password
//         </a>
//       </Form.Item>

//       <Form.Item>
//         <Button type="primary" htmlType="submit" className="login-form-button">
//           Log in
//         </Button>
//         Or <a href="">register now!</a>
//       </Form.Item>
//     </Form>
//   )
// }

// export default AddUserFrom

// import { Button, Form, Input, Select } from 'antd'
// import React, { useState } from 'react'

// interface DataNodeType {
//   value: string
//   label: string
//   children?: DataNodeType[]
// }

// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//     sm: { span: 8 }
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//     sm: { span: 16 }
//   }
// }

// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0
//     },
//     sm: {
//       span: 16,
//       offset: 8
//     }
//   }
// }
// // interface FormProps: {
// //   name: string
//   // email: string
//   // password: string
//   // organization: string
// // }
// interface FormProps {
//   name: string
//   email: string
//   password: string
//   organization: string
// }

// const AddUserFrom: React.FC<FormProps> = () => {
//   // const [form] = Form.useForm()
//   const [formData, setFormData] = useState({
//     // email: "",
//     // password: "",
//     // confirmPassword: "",
//     name: '',
//     email: '',
//     password: '',
//     organization: ''
//   })
//   const onFinish = (values: any) => {
//     console.log('Received values of form: ', values)
//   }

//   const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([])

//   return (
//     <Form
//       {...formItemLayout}
//       form={formData}
//       name="register"
//       onFinish={onFinish}
//       style={{ maxWidth: 600 }}
//       scrollToFirstError
//     >
//       <Form.Item
//         name="email"
//         label="E-mail"
//         value= {formData.email}
//         rules={[
//           {
//             type: 'email',
//             message: 'The input is not valid E-mail!'
//           },
//           {
//             required: true,
//             message: 'Please input your E-mail!'
//           }
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="password"
//         label="Password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!'
//           }
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="name"
//         label="Name"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your name!',
//             whitespace: true
//           }
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item {...tailFormItemLayout}>
//         <Button type="primary" htmlType="submit">
//           Register
//         </Button>
//       </Form.Item>
//     </Form>
//   )
// }

// export default AddUserFrom
