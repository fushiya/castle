import React, {useEffect, useContext, useState} from "react";
import {useHttp} from "../../hooks/http.hook";
import {AdminContext} from "../../contexts/admin.context";
import {useHistory} from "react-router-dom";

export const AdminUpdate = () => {
    
    const admin = useContext(AdminContext);
    const request = useHttp();
    const history = useHistory();
    const [updatingDocument, setUpdatingDocumet] = useState({});
    const [dataTypes, setDataTypes] = useState({});

    const loadDocument = async () => {
	try {
	    const data = await request("/admin/documents/read-one", "POST", {currentCollection: admin.currentCollection, currentDocumentId: admin.currentDocumentId});
	    setUpdatingDocument(data.document);
	} catch (e) {}
    }

    const loadDataTypes = async (req,res) => {
	try {
	    const data = await request("/admin/documents/data-types", "POST", {currentCollection: admin.currentCollection});
	    setDataTypes(data.dataTypes);
	} catch (e) {}
    }

    const updateDocument = async () => {
	try {
	    const data = await request("/admin/documents/update", "POST", {currentCollection: admin.currentCollection, updatingDocument});
	    if (data.done) history.push("/admin");
	} catch (e) {}
    }

    useEffect(()=>{
	!!Object.keys(dataTypes).length && loadDataTypes().then(() => loadDocument());
    }, []);

    return Object.isEmpty(updatingDpcument) && (
	<div>
	    {Object.keys(dataTypes).map(item => (
		<div className="form-group">
		    <label htmlFor={"Input"+item}>{item}</label>
		    <input
			className="form-control"
		        type={dataTypes[item]}
		        value={updatingDocument[item] || ""}
		        onChange={e=>setUpdatingDocument({...updatingDocument, [item]: e.target.value})}
		        
		    />
		</div>
	    ))}
	    <button
	        type="button"
		className="btn btn-warning"
	        onClick={updateDocument}
	    >Update</button>
	</div>
    );
}
