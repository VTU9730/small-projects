import { useEffect, useState } from "react";
import LoadMoreData from "./LoadMoreData";

const ScrolIndicator = () => {

    const [scrolePercent, setScrolePercent] = useState(0)

    const handleScoll = () => {
        const percent = (document.documentElement.scrollTop/document.documentElement.scrollHeight)*100+"%"
        setScrolePercent(percent)
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScoll)
    },[])
    return(
        <div className="scrol-container">
            <p className="scroll-p" style={{"width":scrolePercent}}>{parseInt(scrolePercent)}%</p>
            {/* <input type='range' value={scrolePercent}/> */}
            <h1>Scoller...</h1>
            <LoadMoreData />
        </div>
    )
}

export default ScrolIndicator;