import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)

    const FetchData = () => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
    }
    useEffect(() => {
        FetchData()
    });

    return [data]
}

export default useFetch
