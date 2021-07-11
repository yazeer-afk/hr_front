import React, {FC} from "react";
import {Button, Card, Form, Input} from 'antd';

/**
 *
 * @returns {ShiftTypeFormProps}
 * @author Yazeer Ahamed
 */
export interface ShiftTypeFormProps {
}

interface FormValues {
}

/**
 *
 * @returns {ShiftTypeForm}
 * @author Yazeer Ahamed
 */
export const ShiftTypeForm: FC<ShiftTypeFormProps> = () => {

    const onFinish = (values: any) => {

        /**
         * TODO
         * make HttpRequest
         * */
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card title="Shift Type Form" className="mx-8 my-8">
		<Form
            name="basic"
            layout="vertical"
            labelCol={{ span: 8 }}
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Type"
                name="type"
                rules={[{ required: true, message: 'Please provide type for the shift!' }]}
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