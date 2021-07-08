import React, {FC} from 'react';
import {Row} from "antd";
import {
    Link
} from "react-router-dom";

/**
 *
 * @returns {SideNavItemProps}
 * @author Yazeer Ahamed
 */
export interface SideNavItemProps {
}


/**
 *
 * @returns {SideNavItem}
 * @author Yazeer Ahamed
 */
export const SideNavItem: FC<SideNavItemProps> = () => {


	return(
		<>
            <Row>
                <Link to="/">Home</Link>
            </Row>
            <Row>
                <Link to="/house">House</Link>
            </Row>
            <Row>
                <Link to="/users">Users</Link>
            </Row>
        </>
	);
};