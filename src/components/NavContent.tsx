import React, {FC} from 'react';
import {Route, Switch,} from "react-router-dom";
import {DepartmentForm} from "../forms/DepartmentForm";
import {DesignationForm} from "../forms/DesignationForm";
import {ShiftTypeForm} from "../forms/ShiftTypeForm";
import {UpdateEmployeeForm} from "../forms/UpdateEmployeeForm";

/**
 *
 * @returns {NavContentProps}
 * @author Yazeer Ahamed
 */
export interface NavContentProps {
}


/**
 *
 * @returns {NavContent}
 * @author Yazeer Ahamed
 */
export const NavContent: FC<NavContentProps> = () => {


	return(
		<>
            <Switch>
                <Route path="/house">
                </Route>
                <Route path="/users">
                    Users
                </Route>
                <Route path="/">
                    <UpdateEmployeeForm/>
                </Route>
            </Switch>
        </>
	);
};