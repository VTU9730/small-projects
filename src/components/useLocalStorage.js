import { useEffect, useState } from "react"

const useLocalStorage = (storageKey, storageValue) => {

    const [value, setValue] = useState(storageValue)
       
    
    if(!localStorage.getItem(storageKey)){
        localStorage.setItem(storageKey, storageValue)
    }
    else{
        localStorage.setItem(storageKey, value)
    }

    useEffect(()=>{

    },[value])
    
    return [value, setValue]
}

export default useLocalStorage;