import React from "react";

export const Loader = props => {
    return (
	<div className="d-flex align-items-center">
	    <div className="spinner-border" role="status">
		<span className="sr-only">Loading...</span>
	    </div>
	</div>
    );
}
