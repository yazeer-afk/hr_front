import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';
import {Rule} from "antd/es/form";

const SignupForm: FC = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

      const emailRules: Rule[] = [
          {type: "email", message: "E-mail format is wrong!"},
          {required: true, message: "E-mail is required!"}
      ]
      const contactRules: Rule[] = [
          {required: true, message: "Contact number is required!"},
          {min: 10, message: "Contact number format is wrong!"},
          {max: 10, message: "Contact number format is wrong!"},
      ]

    return (
        <Form
            name="basic"
            layout="vertical"
            labelCol={{ span: 8 }}
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Full Name"
                name="fullName"
                rules={[{ required: true, message: 'Please provide your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please provide your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="E-mail" name="email" rules={emailRules}>
                <Input />
            </Form.Item>

            <Form.Item label="Contact Number" name="contactNo" rules={contactRules}>
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please provide your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Sign Up
                </Button>
            </Form.Item>
        </Form>
    )
};

export default SignupForm;