import React, {useContext, useEffect} from "react";
import {AdminContext} from "../../contexts/admin.context";
import {useHttp} from "../../hooks/http.hook";
import {Loader} from "../../components/Loader"; 

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
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
	    <span className="navbar-brand">
		Collections{!!admin.currentCollection && " > "+admin.currentCollection}
	    </span>
	    <button 
	        className="navbar-toggler" 
	        type="button" 
	        data-toggle="collapse" 
	        data-target="#navbarContent" 
	        aria-controls="navbarContent" 
	        aria-expanded="false"
	    >
		<span className="navbar-toggler-icon"></span>
	    </button>

	    <div className="collapse navbar-collapse" id="navbarContent">
	        <ul className="navbar-nav mr-auto">
	    	    {!!admin.collections.length && admin.collections.map(item => (
			<li 
			    className={item===admin.currentCollection ? "nav-item active" : "nav-item"}
			    onClick={()=>admin.setCurrentCollection(item)}
			>
			    <span className="nav-link">{item}</span>
			</li>
	    	    ))}
	        </ul>
	    </div>
	</nav>
    );
}
