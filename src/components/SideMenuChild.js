function SideMenuChild({children}) {
  return (
    <div>
    {children.map(children=>{
        return(
            <div>
            <p>{children.label}</p>
            </div>
        )
    })}
    </div>
  )
}

export default SideMenuChild