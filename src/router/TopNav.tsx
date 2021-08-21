import React, {FC} from 'react';
import {Col, Row, Button} from "antd";
import { LogoutOutlined } from '@ant-design/icons';

/**
 *
 * @returns {TopNavProps}
 * @author Yazeer Ahamed
 */
export interface TopNavProps {
}


/**
 *
 * @returns {TopNav}
 * @author Yazeer Ahamed
 */
export const TopNav: FC<TopNavProps> = () => {

    return (
        <>
            <Row className="w-screen shadow-lg">
                <Col span={4} className='flex justify-center items-center'>
                    <span className='text-gray-700 text-4xl font-sans'>HRM SYSTEM</span>
                </Col>
                <Col span={20} className='py-8'>
                    <Row>
                        <Col span={12} className='flex items-center pl-20'>
                            <span>bruh</span>
                        </Col>
                        <Col span={12}>

                            <Row>
                                <Col span={18} className='flex items-center'>
                                    <Row>
                                        <Col>
                                            <Button>Clock In</Button>
                                        </Col>
                                        <Col>
                                            <Button>Pause</Button>
                                        </Col>
                                        <Col>
                                            00:00:00
                                        </Col>
                                        <Col>
                                            00:00:00
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={6} className='flex justify-center items-center'>
                                    <Button size='large' type='primary' danger>Log Out</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};