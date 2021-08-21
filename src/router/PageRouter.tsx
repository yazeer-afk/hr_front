import React, {FC} from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import {Row, Col} from "antd";
import {SideNavItem} from "../components/SideNavItem";
import {NavContent} from "../components/NavContent";
import {TopNav} from "./TopNav";


/**
 *
 * @returns {PageRouterProps}
 * @author Yazeer Ahamed
 */
export interface PageRouterProps {

}

/**
 *
 * @returns {PageRouter}
 * @author Yazeer Ahamed
 */
export const PageRouter: FC<PageRouterProps> = () => {


    return (
        <>
            {/*top-nav ---------------------------------------------------------------------- */}
            <Row className="bg-indigo-100">
                <TopNav/>
            </Row>
            {/*top-nav ---------------------------------------------------------------------- */}

            <Router>
                <Row className="h-screen overflow-auto bg-blue-600">
                    <Col span={4}>
                        <SideNavItem/>
                    </Col>
                    <Col className="bg-gray-50" span={20}>
                        <NavContent/>
                    </Col>
                </Row>
            </Router>
        </>
    );
};