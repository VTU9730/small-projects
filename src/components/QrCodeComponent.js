import { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeComponent = () => {

    const [input, setInput] = useState('')
    const [name, setName] = useState('')

    const handleOnChange = (e) => {
        setInput(e.target.value)
    }

    const handleOnClick = (e) => {
        setName(input)
        setInput('')
    }
    return(
        <div className="qr-container">
            <h1> Make your QR</h1>
            <div>
            <input type="text" value={input} onChange={(e)=>handleOnChange(e)} />
            <button onClick={() => handleOnClick()}>Generate</button>
            </div>
            <QRCode value= {name} />
        </div>
    )
}

export default QrCodeComponent;