import { sideMenu } from "./sideMenuData";
import SideMenuParent from "./SideMenuParent";
const SideMenu = () => {
    console.log("sideMenu",sideMenu);
    
    return(
        <div>
        <h1>Sidemenu</h1>
         <SideMenuParent parent={sideMenu} />
        </div>
    )
}

export default SideMenu