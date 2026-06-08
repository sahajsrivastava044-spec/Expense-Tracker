import SummaryCard from "../components/SummaryCard"
const transactions = [
  {
    id: 1,
    title: "Pizza",
    amount: 500
  },
  {
    id: 2,
    title: "Movie",
    amount: 800
  },
  {
    id: 3,
    title: "Salary",
    amount: 25000
  }
];  
function Dashboard() {
  return (
    <div className="p-8">
        <h1 className="text-3xl font-bold">Welcome, User!</h1>

        <div className="mt-8 flex gap-4">
            {transactions.map(txn => (
                <SummaryCard key={txn.id} title={txn.title} amount={txn.amount} />
            ))}
        </div>
    </div>
  )
}

export default Dashboard

/*  */