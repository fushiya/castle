import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {useRootRoute} from "./hooks/root.route.hook";
import "bootstrap";

Object.prototype.isEmpty = obj => !!Object.keys(obj).length;

const App = () => {
    
    const router = useRootRoute();

    return (
	<Router>
	    {router}
	</Router>
    );
}

export default App;
