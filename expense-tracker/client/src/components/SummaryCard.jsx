
function SummaryCard({ title, amount, variant }) {
  const variants={
    income: "bg-green-600 text-white",
    expense: "bg-red-600 text-white",
    balance: "bg-blue-600 text-white" 
   }
  return (
    <div className={`border rounded-xl p-6 shadow-md flex-1 ${variants[variant] || ''}`}>
        <h3 className="text-gray-500 text-sm text-white">{title}</h3>
        <p className="text-2xl font-bold mt-2 text-white">₹{amount}</p>
    </div>
  )
}

export default SummaryCard
