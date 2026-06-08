
function SummaryCard({ title, amount }) {
  return (
    <div className="border p-6">
        <h2>{title}</h2>
        <p>{amount}</p>
    </div>
  )
}

export default SummaryCard
