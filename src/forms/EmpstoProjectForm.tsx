import React, {FC} from 'react';
import {AutoComplete, Button, Card, Form} from "antd";

/**
 *
 * @returns {EmpstoProjectFormProps}
 * @author Yazeer Ahamed
 */
export interface EmpstoProjectFormProps {
}


/**
 *
 * @returns {EmpstoProjectForm}
 * @author Yazeer Ahamed
 */
export const EmpstoProjectForm: FC<EmpstoProjectFormProps> = () => {

    const onFinish = (values: any) => {

        /**
         * TODO
         * manually add `status` short
         * make httpRequest
         * figure how the autocomplete thing works
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

    // const onSearch = (searchText: string) => {
    //     setOptions(
    //         !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    //     );
    // };


	return(
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
                    label="Project"
                    name="projectId"
                    rules={[{ required: true, message: "Please select a project!" }]}
                >
                    <AutoComplete
                        options={employeeComplete}
                        // onSearch={onSearch}
                        style={{ width: 200 }}
                        placeholder="Type employee name"
                    />
                </Form.Item>

                <Form.Item
                    label="Employee"
                    name="employeeId"
                    rules={[{ required: true, message: 'Please select an employee!' }]}
                >
                    <AutoComplete
                        options={employeeComplete}
                        style={{ width: 200 }}
                        placeholder="Type project name"
                    />
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