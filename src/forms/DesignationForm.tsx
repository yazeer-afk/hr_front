import React, {FC} from "react";
import {Button, Card, Form, Input} from 'antd';
import axios from "axios";
import {ADD_DESIGNATION} from "../util/endpoints";

/**
 *
 * @returns {DesignationFormProps}
 * @author Yazeer Ahamed
 */
export interface DesignationFormProps {
}

interface FormValues {
}

/**
 *
 * @returns {DesignationForm}
 * @author Yazeer Ahamed
 */
export const DesignationForm: FC<DesignationFormProps> = () => {

    const onFinish = (values: any) => {

        axios.post(ADD_DESIGNATION, values)
            .then((resp) => {
                console.log(resp)
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
        <Card title="Designation Form" className="mx-8 my-8">
            <Form
                name="basic"
                layout="vertical"
                labelCol={{span: 8}}
                initialValues={{}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{required: true, message: 'Please provide a title for the designation!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Salary (Rs.)"
                    name="salary"
                    rules={[{required: true, message: 'Please provide the amount of salary!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Hours of work"
                    name="workHours"
                    rules={[{required: true, message: 'Please provide how many hours of work allocated to the designation!'}]}
                >
                    <Input/>
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