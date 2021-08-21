import React, {FC} from "react";
import {Button, Card, Form, Input} from 'antd';
import axios from "axios";
import {ADD_DEPARTMENT} from "../util/endpoints";

/**
 *
 * @returns {DepartmentFormProps}
 * @author Yazeer Ahamed
 */
export interface DepartmentFormProps {
}

interface FormValues {
}

/**
 *
 * @returns {DepartmentForm}
 * @author Yazeer Ahamed
 */
export const DepartmentForm: FC<DepartmentFormProps> = () => {

    const onFinish = (values: any) => {

        axios.post(ADD_DEPARTMENT, values)
            .then((resp) => {
                console.log(resp);
            })
            .catch((err) => {
                console.log(err)
            })

        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card title="Department Form" className="mx-8 my-8">
		<Form
            name="basic"
            layout="vertical"
            labelCol={{ span: 8 }}
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Department Name"
                name="name"
                rules={[{ required: true, message: 'Please provide a name for the department!' }]}
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