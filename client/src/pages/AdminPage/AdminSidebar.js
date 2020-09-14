import React, {useContext, useEffect} from "react";
import {AdminContext} from "../../contexts/admin.context";
import {useHttp} from "../../hooks/http.hook";

export const AdminSidebar = () => {
    
    const admin = useContext(AdminContext);
    const {request} = useHttp();
    
    useEffect(() => {
	!admin.collections.length && loadCollections();
    }, []);

    const loadCollections = async () => {
	try {
	    const data = await request("/admin");
	    admin.setCollections(data.collections);
	} catch (e) {}
    }

    return (
	<ul>
	    {!!admin.collections.length && admin.collections.map(item => (
		<li>{item}</li>
	    ))}
	</ul>
    );
}
