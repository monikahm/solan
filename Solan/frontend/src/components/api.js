import React, { useEffect, useState } from "react";

const useFetch = (url, state) => {
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(url);
                const json = await result.json();
                state(json);
            }
            catch(error){
                setError(error);
            }
        };
        fetchData();
    }, []);
    console.log({error});
}

export default useFetch;
