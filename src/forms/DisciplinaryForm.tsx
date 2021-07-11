import React, {FC} from "react";
import {AutoComplete, Button, Card, DatePicker, Form, Input} from 'antd';

/**
 *
 * @returns {DisciplinaryFormProps}
 * @author Yazeer Ahamed
 */
export interface DisciplinaryFormProps {
}

interface FormValues {
}

/**
 *
 * @returns {DisciplinaryForm}
 * @author Yazeer Ahamed
 */
export const DisciplinaryForm: FC<DisciplinaryFormProps> = () => {

    const onFinish = (values: any) => {
        /**
         * load employees to the autocomplete
         * figure out how the autocomplete works
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
        {label: "uw", value: 4},
        {label: "yw", value: 5},
        {label: "aw", value: 6},
        {label: "sw", value: 7},
        {label: "dw", value: 8},
    ]

    return (
        <Card title="Disciplinary Form" className="mx-8 my-8">
		<Form
            name="basic"
            layout="vertical"
            labelCol={{ span: 8 }}
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Date"
                name="date"
                rules={[{ required: true, message: 'Please provide the date of incident!' }]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item
                label="Description"
                name="reason"
                rules={[{ required: true, message: 'Please provide a description of the incident!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Employee"
                name="employeeId"
                rules={[{ required: true, message: "Please select the employee!" }]}
            >
                <AutoComplete
                    options={employeeComplete}
                    // onSearch={onSearch}
                    style={{ width: 200 }}
                    placeholder="Type employee name"
                />
            </Form.Item>

            <Form.Item
                label="Employee Statement"
                name="employeeStatement"
                rules={[{ required: true, message: "Please state the employee's statement!" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Employer Statement"
                name="employerStatement"
                rules={[{ required: true, message: "Please state the employer's statement!" }]}
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