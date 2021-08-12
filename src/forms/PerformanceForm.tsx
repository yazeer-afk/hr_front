import React, {FC} from "react";
import {AutoComplete, Button, Card, Form, Input, Rate} from 'antd';

/**
 *
 * @returns {PerformanceFormProps}
 * @author Yazeer Ahamed
 */
export interface PerformanceFormProps {
}

interface FormValues {
}

/**
 *
 * @returns {PerformanceForm}
 * @author Yazeer Ahamed
 */
export const PerformanceForm: FC<PerformanceFormProps> = () => {

    const onFinish = (values: any) => {

        /**
         * TODO
         * make httpRequest
         * */

        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const employeeComplete = [
        {label: "qw", value: 1},
        {label: "ew", value: 2},
        {label: "tw", value: 3},
        {label: "dw", value: 8},
    ]

    return (
        <Card title="Performance Form" className="mx-8 my-8">
		<Form
            name="basic"
            layout="vertical"
            labelCol={{ span: 8 }}
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Employee"
                name="employeeId"
                rules={[{ required: true, message: 'Please select an employee!' }]}
            >
                <AutoComplete
                    options={employeeComplete}
                    // onSearch={onSearch}
                    style={{ width: 200 }}
                    placeholder="Type employee name"
                />
            </Form.Item>

            <Form.Item
                label="Employer Statement"
                name="statement"
                rules={[{ required: true, message: 'Please fill this area!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Rate" name="rate">
                <Rate />
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