import React, {FC} from 'react';
import {Button, Card, DatePicker, Form, Input} from 'antd';
import {Rule} from "antd/es/form";

/**
 *
 * @returns {ProjectFormProps}
 * @author Yazeer Ahamed
 */
export interface ProjectFormProps {
}


/**
 *
 * @returns {ProjectForm}
 * @author Yazeer Ahamed
 */
export const ProjectForm: FC<ProjectFormProps> = () => {

    const { RangePicker } = DatePicker;

    const onFinish = (values: any) => {

        /**
         * TODO
         * break `timeRange` into two and assign startDate and endDate
         * manually add paid short
         * make httpRequest
         * */

        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const emailRules: Rule[] = [
        {type: "email", message: "E-mail format is wrong!"},
        {required: true, message: "Client E-mail is required!"}
    ]

	return(
		<Card title="Project Form" className="mx-8 my-8">
            <Form
                name="basic"
                layout="vertical"
                labelCol={{ span: 8 }}
                initialValues={{}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Project Title"
                    name="name"
                    rules={[{ required: true, message: 'Please provide a title for the project!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Project Allocated Time Span"
                    name="timeRange"
                    rules={[{ required: true, message: "Please provide the project's allocated time span!" }]}
                >
                    <RangePicker />
                </Form.Item>

                <Form.Item
                    label="Maximum Staff Amount"
                    name="staffAmount"
                    rules={[{ required: true, message: "Please provide the maximum count of staff can be allocated to the project!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Project Budget"
                    name="cost"
                    rules={[{ required: true, message: "Please provide the budget of the project!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Client E-mail"
                    name="clientMail"
                    rules={emailRules}
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
};