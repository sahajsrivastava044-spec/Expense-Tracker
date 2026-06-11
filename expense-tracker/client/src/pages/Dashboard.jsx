import SummaryCard from "../components/SummaryCard"
import TransactionItem from "../components/TransactionItem";
import {useState} from "react"; 
const summaryData=[{
  id: 1,
  title: "Budget",
  amount: 50000,
},
{
  id: 2,
  title: "Spending",
  amount: 15000,
},
{
  id: 3,
  title: "Remaining",
  amount: 35000,
}]

function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions,setTransactions] = useState([
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
  ]);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("Expense");
  function handleSave(){
    if(!title || !amount || !category || !type){
      alert("Please fill in all fields");
      return;
    };
    const newTransaction = {
      id: transactions.length+1,
      title,
      amount: parseFloat(amount),
      category,
      type
    }
    setTransactions([...transactions, newTransaction]);
    setTitle("");
    setAmount("");
    setCategory("");
    setType("Expense");
    setShowForm(false);
  }
  return (
    <div className="p-8">
        <h1 className="text-3xl font-bold">Welcome, User!</h1>
        <button 
        onClick={() => setShowForm(true)} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          + Add Expense
        </button>
        {showForm && (
          <div className="mt-4 p-4 border rounded">
            <h3>Add New Expense</h3>
            
            <input type="text" 
            placeholder="Expense Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded p-2 w-full mb-3"/>
            
            <input type="number" 
            placeholder="Expense Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded p-2 w-full mb-3"/>

            <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded p-2 w-full mb-3">
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Education">Education</option>
              <option value="Bills">Bills</option>
              <option value="Entertainment">Entertainment</option>
            </select>

            <div className="mb-3">
              <p className="mb-2 font-medium">Type</p>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="Expense"
                    checked={type === "Expense"}
                    onChange={(e) => setType(e.target.value)}
                    className="form-radio"
                  />
                  <span className="ml-2">Expense</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="Income"
                    checked={type === "Income"}
                    onChange={(e) => setType(e.target.value)}
                    className="form-radio"
                  />
                  <span className="ml-2">Income</span>
                </label>
              </div>
            </div>

            <button onClick={handleSave} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Save Expense
            </button>
          </div>
        )}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Summary</h2>
          <div className="flex gap-6 mt-4">
            {summaryData.map(summary => (
            <SummaryCard
              key={summary.id}
              title={summary.title}
              amount={summary.amount}
            />
          ))}
          </div>
          
        </div>
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
            {transactions.map(txn => (
                <TransactionItem key={txn.id} title={txn.title} amount={txn.amount} />
            ))}
        </div>
    </div>
  )
}

export default Dashboard

