import React,{useState} from "react";
import {Switch, Route} from "react-router-dom";
import {AdminPage} from "../pages/AdminPage/AdminPage";
import {AdminContext} from "../contexts/admin.context";

export const useAdminRoute = () => {

    const [collections, setCollections] = useState([]);
    const [currentCollections, setCurrentCollections] = useState(null);

    return (
	<AdminContext.Provider value={{
	    collections, setCollections,
	    currentCollections, setCurrentCollections
	}}>
	    <Switch>
	        <Route path="/admin/create">
		    <h1>create</h1>
	        </Route>
	        <Route path="/admin/update">
		    <h1>update</h1>
	        </Route>
	        <Route path="/admin" exact>
	            <AdminPage/>
	        </Route>
	    </Switch>
	</AdminContext.Provider>
    );
}
