import { useState } from "react"

const RandomBackgroundColor = () => {
    const [color, setColor] = useState("#000000")
    const [typeOfColor, setTypeOfColor] = useState(null)

    function colorUtility(length){
        return Math.floor(Math.random()*length)
    }
    const handleColor = () => {
        let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        if(typeOfColor=="hex"){
            let hexColor="#"
            for(let i=0;i<6;i++){
                hexColor+=hex[colorUtility(15)]  
            }
            setColor(hexColor)
           
            
        }
        if(typeOfColor=="rgb"){
            let r = colorUtility(256)
            let g = colorUtility(256)
            let b = colorUtility(256)
            setColor(`rgb(${r},${g},${b})`)
        }
        if(typeOfColor=="rgba"){
            let r = colorUtility(256)
            let g = colorUtility(256)
            let b = colorUtility(256)
            let a = colorUtility(10)
            setColor(`rgb(${r},${g},${b},0.${a})`)
        }
        
    }
    return(
        <main style={{"backgroundColor":color,"width":"auto","height":"500px"}}>
            <button onClick={()=>{setTypeOfColor("hex")}}>Generate Hex Color</button>
            <button onClick={()=>{setTypeOfColor("rgb")}}>Generate rgb Color</button>
            <button onClick={()=>{setTypeOfColor("rgba")}}>Generate rgba Color</button>
            <button onClick={()=>handleColor()}>Generate Color</button>
        </main>
    )
}

export default RandomBackgroundColor;