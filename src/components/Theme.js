import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
const Theme = () => {
    const [theme, setTheme] = useLocalStorage('theme','light')

    const handleTheme = () => {
        setTheme(theme=='light'?'dark':'light')
    }
    return(
        <div className={theme + " theme-container"}>
            <h1>Here toggle your themes</h1>
            <button onClick={()=>handleTheme()}>Theme</button>
        </div>
    )
}

export default Theme;