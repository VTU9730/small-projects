import Tab from "./Tab"

const CustomTabs = () => {

    const tabsData = [
        {
            label:'General',
            content:'general tab data'
        },
        {
            label:'Parties',
            content:'parties tab data'
        },
        {
            label:'Properties',
            content:'properties tab data'
        },
        {
            label:'Income',
            content:'income tab data'
        },
        {
            label:'Financials',
            content:'financials tab data'
        },
        {
            label:'Assets',
            content:'assets tab data'
        },
        {
            label:'Other',
            content:'other tab data'
        }
    ]
    return(
        <div className="tabs-container">
            <Tab tabsData={tabsData} />
        </div>
    )
}

export default CustomTabs