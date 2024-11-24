import SideMenuParent from "./SideMenuParent"

function SideMenuChild({children}) {
  return (
    <div>
    {children.map(children=>{
        return(
            <div>
            <p>{children.label}</p>
            {
              children.children && <SideMenuParent parent={children.children} />
            }
            </div>
        )
    })}
    </div>
  )
}

export default SideMenuChild