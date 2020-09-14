import React from "react";
import {Switch, Route} from "react-router-dom";
import {useAdminRoute} from "./admin.route.hook";

export const useRootRoute = () => {

    const adminRoute = useAdminRoute();

    return (
	<Switch>
	    <Route path="/admin">
		{adminRoute}
	    </Route>
	</Switch>
    );
}
