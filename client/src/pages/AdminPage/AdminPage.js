import React, {useContext} from "react";
import {AdminContext} from "../../contexts/admin.context";
import {AdminSidebar} from "./AdminSidebar";

export const AdminPage = () => {

    return (
	<div class="container-fluid">
	    <div class="row">
		<div class="col-sm-2">
		    <AdminSidebar/>
	    	</div>
	    </div>
	</div>
    );
}
