// // import type { FormInstance } from 'antd'
// // import { Button, Form, Input, Space } from 'antd'
// // import React from 'react'

// // const SubmitButton = ({ form }: { form: FormInstance }) => {
// //   const [submittable, setSubmittable] = React.useState(false)

// //   // Watch all values
// //   const values = Form.useWatch([], form)

// //   React.useEffect(() => {
// //     form.validateFields({ validateOnly: true }).then(
// //       () => {
// //         setSubmittable(true)
// //       },
// //       () => {
// //         setSubmittable(false)
// //       }
// //     )
// //   }, [values])

// //   return (
// //     <Button type="primary" htmlType="submit" disabled={!submittable}>
// //       Submit
// //     </Button>
// //   )
// // }

// // const AddUserFrom: React.FC = () => {
// //   const [form] = Form.useForm()

// //   return (
// //     <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
// //       <Form.Item name="name" label="Name" rules={[{ required: true }]}>
// //         <Input />
// //       </Form.Item>
// //       <Form.Item name="age" label="Age" rules={[{ required: true }]}>
// //         <Input />
// //       </Form.Item>
// //       <Form.Item>
// //         <Space>
// //           <SubmitButton form={form} />
// //           <Button htmlType="reset">Reset</Button>
// //         </Space>
// //       </Form.Item>
// //     </Form>
// //   )
// // }

// // export default AddUserFrom

// // import { LockOutlined, UserOutlined } from '@ant-design/icons'
// // import { Button, Checkbox, Form, Input } from 'antd'
// // import React from 'react'

// // const AddUserFrom: React.FC = () => {
// //   const onFinish = (values: any) => {
// //     console.log('Received values of form: ', values)
// //   }

// //   return (
// //     <Form
// //       name="normal_login"
// //       className="login-form"
// //       initialValues={{ remember: true }}
// //       onFinish={onFinish}
// //     >
// //       <Form.Item
// //         name="username"
// //         rules={[{ required: true, message: 'Please input your Username!' }]}
// //       >
// //         <Input
// //           prefix={<UserOutlined className="site-form-item-icon" />}
// //           placeholder="Username"
// //         />
// //       </Form.Item>
// //       <Form.Item
// //         name="password"
// //         rules={[{ required: true, message: 'Please input your Password!' }]}
// //       >
// //         <Input
// //           prefix={<LockOutlined className="site-form-item-icon" />}
// //           type="password"
// //           placeholder="Password"
// //         />
// //       </Form.Item>
// //       <Form.Item>
// //         <Form.Item name="remember" valuePropName="checked" noStyle>
// //           <Checkbox>Remember me</Checkbox>
// //         </Form.Item>

// //         <a className="login-form-forgot" href="">
// //           Forgot password
// //         </a>
// //       </Form.Item>

// //       <Form.Item>
// //         <Button type="primary" htmlType="submit" className="login-form-button">
// //           Log in
// //         </Button>
// //         Or <a href="">register now!</a>
// //       </Form.Item>
// //     </Form>
// //   )
// // }

// // export default AddUserFrom

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
