import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Sidebar() {
    const navigate = useNavigate();
    const links=[
        {name:"Dashboard",path:"/"},
        {name:"Analytics",path:"/analytics"},
        {name:"Budgets",path:"/budgets"},
        {name:"Settings",path:"/settings"}
    ]
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    const user = JSON.parse(localStorage.getItem("user"));

    return(
         <div  className="w-64 bg-gray-800 text-white min-h-screen p-6 flex flex-col">
            <h1 className="text-2xl font-bold mb-8">Expense Tracker</h1>
            <p className="text-gray-400 mb-8">Logged in as {user?.name}</p>
            <ul className="space-y-2">
                {links.map((link)=>(
                    <NavLink 
                        key={link.path}
                        to={link.path}
                        className={({isActive})=>`block px-4 py-3 rounded-lg transition-all duration-300 ${
                            isActive?"bg-blue-600 text-white shadow-md":"text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </ul>
            <div className="mt-auto">
                <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 hover:bg-red-700 text-white py-2 rounded"
                >
                    Logout
                </button>
            </div>
         </div>
    )
}

export default Sidebar;