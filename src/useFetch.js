import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url).
            then(resp => {
                if (!resp.ok) throw Error("Error occured while fetching the data.");
                return resp.json()
            }).
            then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            }).
            catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, []);

    return { data, isPending, error };
}

export default useFetch;