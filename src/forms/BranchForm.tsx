import React, {FC} from "react";
import {Button, Card, Form, Input} from 'antd';

/**
 *
 * @returns {BranchFormProps}
 * @author Yazeer Ahamed
 */
export interface BranchFormProps {
}

interface FormValues {
}

/**
 *
 * @returns {BranchForm}
 * @author Yazeer Ahamed
 */
export const BranchForm: FC<BranchFormProps> = () => {

    const onFinish = (values: any) => {
    	/**
    	* TODO
		 * make the HttpRequest
    	* */
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card title="Branch Form" className="mx-8 my-8">
		<Form
            name="basic"
            layout="vertical"
            labelCol={{ span: 8 }}
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Branch Name"
                name="name"
                rules={[{ required: true, message: 'Please provide a name for the branch!' }]}
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