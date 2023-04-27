import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState({});
    const [dataIsLoading, setDataIsLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        if(!url) return;
        setDataIsLoading(true);
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            }
            catch(err) {
                console.log(err);
                setError(err);
            } 
            finally {
                setDataIsLoading(false);
            }
        }
        fetchData();
    }, [url]);
    return({data, dataIsLoading, error});
};