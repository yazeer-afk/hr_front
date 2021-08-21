import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';
import {Rule} from "antd/es/form";
import axios from 'axios'
import {REGISTER_USER} from "../util/endpoints";

const SignupForm: FC = () => {

    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

    const onFinish = (values: any) => {

        axios.post(REGISTER_USER, values )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        console.log(values)
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

      const emailRules: Rule[] = [
          {type: "email", message: "E-mail format is wrong!"},
          {required: true, message: "E-mail is required!"}
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
                name="name"
                rules={[{ required: true, message: 'Please provide your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="E-mail" name="email" rules={emailRules}>
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