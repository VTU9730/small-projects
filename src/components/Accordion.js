import { useState } from "react";
import { accordionData } from "./accordionData";
const Accordion = () => {
  const [selectedId, setSelectedId] = useState("");
  const [multiple, setMultiple] = useState(false)
  const [multipleId, setMultipleId] = useState([])
  const handleSingle = (ele) => {
    setSelectedId(ele);
  };

  const handleMultiple = (ele) => {
    const newArray = [...multipleId]
    const findIndex = newArray.indexOf(ele)
    if(findIndex == -1){
        newArray.push(ele)
    }
    else{
        newArray.splice(findIndex,1)
    }
    setMultipleId(newArray);
    console.log(multipleId);
    
  };
  return (
    <main>
    <button onClick={()=>setMultiple(!multiple)}>Enable Multi Selection</button>
      {accordionData.map((acc) => {
        return (
          <div className="accordion-ele" key={acc.id}>
            <span>{acc.heading}</span>
            <button onClick={() =>multiple?handleMultiple(acc.id):handleSingle(acc.id)}>+</button>
            {selectedId==acc.id || multipleId.includes(acc.id) && (
              <p>
                {acc.answer}
              </p>
            )}
          </div>
        );
      })}
    </main>
  );
};

export default Accordion;
