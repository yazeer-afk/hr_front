import React, {FC} from 'react';
import {Button, Form, Input} from 'antd';

const SigninForm: FC = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

   return(
       <Form
           name="basic"
           layout="vertical"
           labelCol={{ span: 8 }}
           initialValues={{ remember: true }}
           onFinish={onFinish}
           onFinishFailed={onFinishFailed}
       >
           <Form.Item
               label="Username"
               name="username"
               rules={[{ required: true, message: 'Please input your username!' }]}
           >
               <Input />
           </Form.Item>

           <Form.Item
               label="Password"
               name="password"
               rules={[{ required: true, message: 'Please input your password!' }]}
           >
               <Input.Password />
           </Form.Item>

           <Form.Item>
               <Button type="primary" htmlType="submit" block>
                   Sign In
               </Button>
           </Form.Item>
       </Form>
   )
};

export default SigninForm;