import React, {useContext} from "react";
import {AdminContext} from "../../contexts/admin.context";
import {AdminSidebar} from "./AdminSidebar";
import {AdminTable} from "./AdminTable";

export const AdminPage = () => {

    return (
	<div classNane="">
	    <div className="">
		<div className="col-md-10 offset-md-1">
		    <AdminSidebar/>
	    	</div>
	    </div>
	    <div className="">
		<div classNane="col-md-10 offset-md-1">
		    <AdminTable/>
	    	</div>
	    </div>
	</div>
    );
}
