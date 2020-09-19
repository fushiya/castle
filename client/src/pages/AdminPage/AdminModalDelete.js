import React from "react";

export const AdminModalDelete = props => {
    
    return (
	<div className="modal fade" id="AdminModalDelete" tabindex="-1" aria-labelledby="AdminModalDeleteLabel" aria-hidden="true">
	    <div className="modal-dialog">
		<div className="modal-content">
		    <div className="modal-header">
			<h5 className="modal-title" id="AdminModalDeleteLabel">Delete</h5>
	    		<button type="button" className="close" data-dismiss="modal">
			    <span aria-hidden="true">&times;</span>
	    		</button>
	    	    </div>
	    	    <div className="modal-body">
			Are you sure?
	    	    </div>
	    	    <div className="modal-footer">
			<button
	    		    type="button"
			    className="btn btn-secondary"
	    		    data-dismiss="modal"
	    		>Close</button>
	    		<button
			    type="button"
	    		    className="btn btn-danger"
	    		    data-dismiss="modal"
	    		    onClick={()=>props.deleteDocument()}
	    		>
	    		    Delete
	    		</button>
		    </div>
	    	</div>
	    </div>
	</div>
    );
}
