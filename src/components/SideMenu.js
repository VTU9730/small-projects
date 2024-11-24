import { sideMenu } from "./sideMenuData";
import SideMenuParent from "./SideMenuParent";
const SideMenu = () => {
    console.log("sideMenu",sideMenu);
    
    return(
        <div className="sidemenu">
         <SideMenuParent parent={sideMenu} />
        </div>
    )
}

export default SideMenu