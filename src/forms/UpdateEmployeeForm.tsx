import React, {FC, useEffect, useRef, useState} from "react";
import {Button, Form, Card, Select} from 'antd';
import axios from "axios";
import {GET_ALL_DEPARTMENTS, GET_ALL_DESIGNATIONS, GET_ALL_SHIFTS, GET_FILL_EMPLOYEES} from "../util/endpoints";

/**
 *
 * @returns {UpdateEmployeeFormProps}
 * @author Yazeer Ahamed
 */
export interface UpdateEmployeeFormProps {
}

interface FormValues {
}

/**
 *
 * @returns {UpdateEmployeeForm}
 * @author Yazeer Ahamed
 */
export const UpdateEmployeeForm: FC<UpdateEmployeeFormProps> = () => {
    const { Option } = Select;

    const employeeRef = useRef(<Option value="0" disabled>Loading</Option>);
    const departmentRef = useRef(<Option value="0" disabled>Loading</Option>);
    const designationRef = useRef(<Option value="0" disabled>Loading</Option>);
    const shiftRef = useRef(<Option value="0" disabled>Loading</Option>);

    const [empDisabled, setEmpDisabled] = useState(true)
    const [depDisabled, setDepDisabled] = useState(true)
    const [desDisabled, setDesDisabled] = useState(true)
    const [shiftDisabled, setShiftDisabled] = useState(true)

    useEffect(() => {

        axios.get(GET_FILL_EMPLOYEES)
            .then((resp) => {
                employeeRef.current = resp.data.map((emp:any) => (<Option key={emp.id} value={emp.id}>{emp.name}</Option>))
                setEmpDisabled(false)
            }).catch(err => {
                console.log(err)
        })

        axios.get(GET_ALL_DESIGNATIONS)
            .then((resp) => {
                designationRef.current = resp.data.map((des:any) => (<Option key={des.id} value={des.id}>{des.title}</Option>))
                setDesDisabled(false)
            }).catch(err => {
            console.log(err)
        })

        axios.get(GET_ALL_DEPARTMENTS)
            .then((resp) => {
                departmentRef.current = resp.data.map((dep:any) => (<Option key={dep.id} value={dep.id}>{dep.name}</Option>))
                setDepDisabled(false)
            }).catch(err => {
            console.log(err)
        })

        axios.get(GET_ALL_SHIFTS)
            .then((resp) => {
                shiftRef.current = resp.data.map((shift:any) => (<Option key={shift.id} value={shift.id}>{shift.type}</Option>))
                setShiftDisabled(false)
            }).catch(err => {
            console.log(err)
        })

    }, [])

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card title="Fill in employee" className="mx-8 my-8">
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
                name="id"
                rules={[{ required: true, message: 'Select an employee!' }]}
            >
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select an employee"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {employeeRef.current}
                </Select>
            </Form.Item>

            <Form.Item
                label="Department"
                name="departmentId"
                rules={[{ required: true, message: 'Select a department!' }]}
            >
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a department"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {departmentRef.current}
                </Select>
            </Form.Item>

            <Form.Item
                label="Designation"
                name="designationId"
                rules={[{ required: true, message: 'Select a designation!' }]}
            >
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a designation"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {designationRef.current}
                </Select>
            </Form.Item>

            <Form.Item
                label="Shift"
                name="shiftId"
                rules={[{ required: true, message: 'Select a shift!' }]}
            >
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a shift"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {shiftRef.current}
                </Select>
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