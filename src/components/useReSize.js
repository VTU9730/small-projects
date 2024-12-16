import { useEffect, useState } from "react"

const useReSize = () => {
    const [size, setSize] = useState({
        width:window.innerWidth,
        height:window.innerHeight
    })
    
    function handleReSize(){
        setSize({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }
    useEffect(()=>{
        handleReSize()
        window.addEventListener('resize',handleReSize)
        return(()=>window.removeEventListener('resize',handleReSize))
    },[])
    return size
}

export default useReSize;