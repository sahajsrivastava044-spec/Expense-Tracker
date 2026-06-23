import { NavLink } from "react-router-dom";

function Sidebar() {
    const links=[
        {name:"Dashboard",path:"/"},
        {name:"Analytics",path:"/analytics"},
        {name:"Budgets",path:"/budgets"},
        {name:"Settings",path:"/settings"}
    ]

    return(
         <div className="w-64 bg-gray-800 text-white h-screen p-6">
            <h1 className="text-2xl font-bold mb-8">Expense Tracker</h1>
            <ul className="space-y-4">
                {links.map((link)=>(
                    <NavLink 
                        key={link.path}
                        to={link.path}
                        className={({isActive})=>`block p-2 rounded transistion-colors ${
                            isActive?"bg-blue-600":"hover:bg-gray-700"}`}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </ul>
         </div>
    )
}

export default Sidebar;