import SummaryCard from "../components/SummaryCard"
import TransactionItem from "../components/TransactionItem";
import {useState,useEffect} from "react";
import { getTransactions, createTransaction, deleteTransaction } from "../services/transactionService"; 

function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions,setTransactions] = useState([]);

  useEffect(()=>{
    const fetchTransaction=async()=>{
      try {
        const data=await getTransactions();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions",error);
      }
    }
    fetchTransaction();
  },[])

  const [category, setCategory] = useState("");
  const [type, setType] = useState("Expense");
  const totalIncome=transactions.filter(txn => txn.type === "Income").reduce((acc, txn) => acc + txn.amount, 0);
  const totalExpense=transactions.filter(txn => txn.type === "Expense").reduce((acc, txn) => acc + txn.amount, 0);
  const balance=totalIncome-totalExpense;
  useEffect(()=>{
    if (balance<0){
      alert("Your expense is more than your budget!");
    }
  },[balance]);
  async function handleSave(){
    if(!title || !amount || !category || !type){
      alert("Please fill in all fields");
      return;
    };
    const newTransaction = {
      title,
      amount: parseFloat(amount),
      category,
      type
    }
    try {
      const saveTransaction= await createTransaction(newTransaction);
      setTransactions((prev)=>[...prev, saveTransaction]);
      setTitle("");
      setAmount("");
      setCategory("");
      setType("Expense");
      setShowForm(false);
    } catch (error) {
      console.error("Error creating transaction:",error);
      alert("Failed to save transaction");
    }
  }
  const handleDelete=async(id)=>{
    try {
      await deleteTransaction(id);
      setTransactions(prev=>prev.filter(txn=>txn._id !== id));
    } catch (error) {
      console.error("Error deleting transaction:",error);
    }
  }
  return (
    balance < 0,
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
            
            <SummaryCard
              title="Total Income"
              amount={totalIncome}
              variant="income"
            />
            <SummaryCard
              title="Total Expense"
              amount={totalExpense}
              variant="expense"
            />
            <SummaryCard
              title="Balance"
              amount={balance}
              variant="balance"
            />
          </div>
          
        </div>
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
            {transactions.map(txn => (
                <TransactionItem key={txn._id} {...txn} onDelete={handleDelete}/>
            ))}
        </div>
    </div>
  )
}

export default Dashboard

