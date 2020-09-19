import React,{useState} from "react";
import {Switch, Route} from "react-router-dom";
import {AdminPage} from "../pages/AdminPage/AdminPage";
import {AdminContext} from "../contexts/admin.context";
import {AdminCreate} from "../pages/AdminPage/AdminCreate";

export const useAdminRoute = () => {

    const [collections, setCollections] = useState([]);
    const [currentCollection, setCurrentCollection] = useState(null);
    const [currentDocumentId, setCurrentDocumentId] = useState(null);

    return (
	<AdminContext.Provider value={{
	    collections, setCollections,
	    currentCollection, setCurrentCollection,
	    currentDocumentId, setCurrentDocumentId
	}}>
	    <Switch>
	        <Route path="/admin/create">
		    <AdminCreate/>
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
