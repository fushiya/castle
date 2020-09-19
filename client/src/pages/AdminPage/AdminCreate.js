import React, {useState, useEffect, useContext} from "react";
import {useHttp} from "../../hooks/http.hook";
import {AdminContext} from "../../contexts/admin.context";
import {useHistory} from "react-router-dom";

export const AdminCreate = () => {

    const admin = useContext(AdminContext);
    const history = useHistory();
    const {request} = useHttp();
    const [newDocument, setNewDocument] = useState({});
    const [dataTypes, setDataTypes] = useState({});

    useEffect(()=>{
	loadDataTypes();
    }, []);

    const createDocument = async () => {
	try {
	    const data = await request("/admin/documents/create", "POST", {currentCollection: admin.currentCollection, newDocument});
	    if (data.done) history.push("/admin");
	} catch (e) {}
    }

    const loadDataTypes = async () => {
	try {
	    const data = await request("/admin/documents/data-types", "POST", {currentCollection: admin.currentCollection});
	    setDataTypes({...data.dataTypes});

	} catch (e) {alert(e.message)}
    }

    return !!Object.keys(dataTypes).length && (
	<div>
	    {Object.keys(dataTypes).sort().map(item => item!=="_id" && (
		<div className="form-group">
		    <label htmlFor={"Input"+item}>{item}</label>
		    <input
			className="form-control"
		        id={"Input"+item}
			type={dataTypes[item]}
		        value={newDocument[item] || ""}
		        onChange={e=>setNewDocument({...newDocument, [item]: e.target.value})}
		    />
		</div>
	    ))}
	    <button 
	        className="btn btn-primary"
	        onClick={()=>createDocument()}
	    >Create</button>
	</div>
    );

}
