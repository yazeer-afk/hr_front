import React, {FC} from "react";
import {Button, Card, Form, Input} from 'antd';

/**
 *
 * @returns {InsuranceFormProps}
 * @author Yazeer Ahamed
 */
export interface InsuranceFormProps {
}

interface FormValues {
}

/**
 *
 * @returns {InsuranceForm}
 * @author Yazeer Ahamed
 */
export const InsuranceForm: FC<InsuranceFormProps> = () => {

    const onFinish = (values: any) => {

        /**
         * TODO
         * manually add `status` short 1
         * make httpRequest
         * */
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card title="Insurance Form" className="mx-8 my-8">
		<Form
            name="basic"
            layout="vertical"
            labelCol={{ span: 8 }}
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Insurance Title"
                name="title"
                rules={[{ required: true, message: 'Please provide a title for the insurance!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Amount to be transferred per month"
                name="amount"
                rules={[{ required: true, message: 'Please provide an amount for the insurance!' }]}
            >
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