import React, {useContext, useState, useEffect} from "react";
import {useHttp} from "../../hooks/http.hook";
import {AdminContext} from "../../contexts/admin.context";
import {Loader} from "../../components/Loader";
import {Link} from "react-router-dom";
import {AdminModalDelete} from "./AdminModalDelete";

export const AdminTable = () => {
    
    const admin = useContext(AdminContext);
    const {request} = useHttp();
    const [documents, setDocuments] = useState([]);

    const loadDocuments = async () => {
	try {
	    const data = await request("/admin/documents/read", "POST", {currentCollection: admin.currentCollection});
	    setDocuments(data.documents);
	} catch (e) {alert(e.message)}
    }

    useEffect(() => {
	!!admin.currentCollection && loadDocuments();
    }, [admin.currentCollection]);

    const renderTDs = i => {
	return Object.keys(documents[i]).sort().map(item => (
	    <td

	    >
		{documents[i][item]}
	    </td>
	));
    }

    const deleteDocument = async () => {
	try {
	    const data = await request("/admin/documents/delete", "POST", {currentCollection: admin.currentCollection, currentDocumentId: admin.currentDocumentId});
	    if (data.done) loadDocuments(); 
	} catch (e) {alert(e.message)}
    }

    return !documents.length ? <Loader/> : (
	<div className="table-responsive">
	    <Link to="/admin/create" className="btn btn-success">Create</Link>
	    <table className="table table-hover table-sm text-center">
		<thead className="thead-dark">
		    <tr>
			{Object.keys(documents[0]).sort().map((item, index)=>(
			    <th>
				{item}
			    </th>
			))}
	    		<th>#</th>
	    	    </tr>
	    	</thead>
	    	<tbody>
		    {documents.map((item,index)=>
		        <tr>
			    {renderTDs(index)}
			    <td>
			        <div className="btn-group" role="group" onClick={()=>admin.setCurrentDocumentId(documents[index]._id)}>
			    	    <Link
			    		to="/admin/update"
                        		type="button"
                        		className="btn btn-warning"
			    	    >Update</Link>
			    	    <button                                                        type="button"                                              className="btn btn-danger"
                        		data-toggle="modal"                                        data-target="#AdminModalDelete"
                    		    >Delete</button>                                       </div>                                                 </td>
			</tr>
		    )}
	    	</tbody>
	    </table>
	    <AdminModalDelete deleteDocument={deleteDocument}/>
	</div>
    );
}
