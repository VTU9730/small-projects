import { useState } from "react";
import SideMenuChild from "./SideMenuChild";
function SideMenuParent({parent}) {
    const [show, setShow] = useState(false)
    const [current, setCurrent] = useState(null)

    const handleClick = (index) =>{
        setShow(!show)
        setCurrent(index)
        console.log(index);
        
    }
  return (
    <div>
        {
            parent && parent.map((parent,index)=>{
                return(
                    <div key={index}>
                        <span>{parent.label}</span><button onClick={() => handleClick(index)}>{show?'-':'+'}</button>
                        {parent && parent.children?(
                            show && current ===index && <SideMenuChild children={parent.children} />
                        ):null}
                    </div>
                )
            })
        }
        </div>
  )
}

export default SideMenuParent