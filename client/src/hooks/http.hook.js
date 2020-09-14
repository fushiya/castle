import React, {useState, useCallback} from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const request = useCallback(async (url, method='GET', body=null, headers={}) => {
	try {
	    setLoading(true);
	    
	    if (body) {
		body = JSON.strigify(body);
		headers["Content-Type"] = "application/json";
	    }

	    const response = await fetch(url, {method, body, headers});
	    const data = await response.json();

	    if (!response.ok) throw new Error(data.message || "Query error");

	    setLoading(false);

	    return data;
	} catch (e) {
            setLoading(false);
	    setError(e.message);
	    throw e;
	}

    }, []);

    const clearError = useCallback(() => setError(null), []);

    return {loading, error, request, clearError};

}
