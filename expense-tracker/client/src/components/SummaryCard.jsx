
function SummaryCard({ title, amount, variant }) {
  const variants={
    income: "border-green-500",
    expense: "border-red-500",
    balance: "border-blue-500" 
   }
  return (
    <div className={`bg-white border-l-4 rounded-xl p-6 shadow-sm flex-1 ${variants[variant] || 'border-gray-200'}`}>
        <h3 className="text-gray-500 text-sm uppercase tracking-wider font-semibold mb-1">{title}</h3>
        <p className={`text-3xl font-bold ${variant === 'expense' ? 'text-red-600' : variant === 'income' ? 'text-green-600' : 'text-blue-700'}`}>₹{amount}</p>
    </div>
  )
}

export default SummaryCard
