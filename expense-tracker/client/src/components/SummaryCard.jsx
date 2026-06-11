
function SummaryCard({ title, amount }) {
  return (
    <div className="border rounded-xl p-6 shadow-md flex-1">
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-2xl font-bold mt-2">${amount}</p>
    </div>
  )
}

export default SummaryCard
