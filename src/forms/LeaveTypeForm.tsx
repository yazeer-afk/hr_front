import React, {FC} from "react";
import {Button, Card, Form, Input, Switch} from 'antd';

/**
 *
 * @returns {LeaveTypeFormProps}
 * @author Yazeer Ahamed
 */
export interface LeaveTypeFormProps {
}

interface FormValues {
}

/**
 *
 * @returns {LeaveTypeForm}
 * @author Yazeer Ahamed
 */
export const LeaveTypeForm: FC<LeaveTypeFormProps> = () => {

    const onFinish = (values: any) => {

        /**
         * TODO
         * make httpRequest
         * switch values are true/false
         * */
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card title="Leave Type Form" className="mx-8 my-8">
		<Form
            name="basic"
            layout="vertical"
            labelCol={{ span: 8 }}
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Leave Type"
                name="type"
                rules={[{ required: true, message: 'Please provide a type of leave!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Paid" name="paid">
                <Switch />
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