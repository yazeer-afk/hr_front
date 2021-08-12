import React, {FC} from "react";
import {Button, Card, Form, Input} from 'antd';
import {Rule} from "antd/es/form";

/**
 *
 * @returns {BankFormProps}
 * @author Yazeer Ahamed
 */
export interface BankFormProps {
}

interface FormValues {
}

/**
 *
 * @returns {BankForm}
 * @author Yazeer Ahamed
 */
export const BankForm: FC<BankFormProps> = () => {

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

    return (
        <Card title="Assign Employee to Project" className="mx-8 my-8">
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

            <Form.Item label="E-mail" name="email" rules={emailRules}>
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Save
                </Button>
            </Form.Item>
        </Form>
        </Card>
    );
}