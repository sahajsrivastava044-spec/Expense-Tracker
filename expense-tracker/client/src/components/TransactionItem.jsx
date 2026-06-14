function TransactionItem({title, amount, category, type}) {
  const badgeStyles={
    Income: "bg-green-100 text-green-800",
    Expense: "bg-red-100 text-red-800"
  }
  return(
    <div className="flex justify-between bg-gray-800 border border-gray-700 rounded-lg p-4 mb-3 text-white" >
      <div className="flex flex-col">
      <span>{title}</span>
      <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">{category}</span>
      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeStyles[type] || ''}`}>
        {type}
      </span>
      </div>
      </div>
      <div className={`text-lg font-bold ${type === "Income" ? "text-green-400" : "text-red-400"}`}>  
      <span>{type==="Income" ? `+₹${amount}` : `-₹${amount}`}</span>
      </div>
    </div>
  )   
} 

export default TransactionItem;