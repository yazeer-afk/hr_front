import React, { FC } from 'react';
import { Row, Col} from 'antd';
import SigninForm from '../forms/SigninForm';
import SignupForm from '../forms/SignupForm';

const SignView: FC = () => {

    return (
        <div>
            <Row gutter={12}>
                <Col span={12}>
                    <SignupForm />
                </Col>
                <Col span={12}>
                    <SigninForm />
                </Col>
            </Row>
        </div>
    )
};

export default SignView;