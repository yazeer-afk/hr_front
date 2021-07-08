import React, {FC} from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

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
                    house
                </Route>
                <Route path="/users">
                    Users
                </Route>
                <Route path="/">
                    home
                </Route>
            </Switch>
        </>
	);
};