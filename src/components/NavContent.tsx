import React, {FC} from 'react';
import {Route, Switch,} from "react-router-dom";
import {DesignationForm} from "../forms/DesignationForm";

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
                    <DesignationForm/>
                </Route>
            </Switch>
        </>
	);
};