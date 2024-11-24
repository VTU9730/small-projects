import { useState } from "react";

const Tab = ({tabsData}) => {
    const [currentIndex, setCurrentIndex] = useState(null)
    console.log(tabsData);
    
    return(
        <div>
            <div className="tab-container">
            {   
                tabsData.map((tabName,index)=>{
                    return(
                        <a className="tab-name" onClick={()=>setCurrentIndex(index)} key={index}>
                            {tabName.label}
                        </a>
                    )
                })   
            }
            </div>
            <div>
                {
                    tabsData.map((tabContent, index)=>{
                       return(currentIndex == index && <div key={index}>
                        <p>{tabContent.content}</p>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Tab;