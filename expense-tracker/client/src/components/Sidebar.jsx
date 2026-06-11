function Sidebar() {
    return(
         <div className="w-64 bg-gray-800 text-white h-screen p-6">
            <h1 className="text-2xl font-bold mb-8">Expense Tracker</h1>
            <ul className="space-y-4">
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Dashboard</li>
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Analytics</li>
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Budgets</li>
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
            </ul>
         </div>
    )
}

export default Sidebar;