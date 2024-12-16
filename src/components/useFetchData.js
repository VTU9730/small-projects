import { useEffect, useState } from "react"

const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    async function fetchData(url){
        try{
            const result = await fetch(url)
            const response = await result.json()
            setData(response.products)
        }
        catch(e){
            setError(e.message)
        }
    }
    useEffect(()=>{
        fetchData(url)
    },[url])
    return {error, data}
}

export default useFetchData;