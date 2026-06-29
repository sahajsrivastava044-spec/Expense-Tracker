import { useEffect, useState } from "react";
import { getTransactions } from "../services/transactionService";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid} from "recharts";

const Analytics = () => {
const [transactions, setTransactions]=useState([]);
const totalIncome=transactions.filter(txn=>txn.type==="Income")
.reduce((acc,txn)=>acc+txn.amount,0);
const totalExpense=transactions.filter(txn=>txn.type==="Expense")
.reduce((acc, txn)=>acc+txn.amount,0);

const barData=[
  {name:"Income",amount:totalIncome},
  {name:"Expense",amount:totalExpense}
]
useEffect(()=>{
  const fetchTransactions=async()=>{
    try {
      const data = await getTransactions();
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching transactions",error);
    }
  };
  fetchTransactions();
},[])

const categoryData=transactions.reduce((acc, txn)=>{
  const existingCategory = acc.find(
    item=>item.name===txn.category
  );
  if(existingCategory){
    existingCategory.value+=txn.amount;
  }else{
    acc.push({
      name:txn.category,
      value:txn.amount,
    })
  }

  return acc;
},[]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>
      <div className="bg-gray-800 p-6 rounded-xl">
        <PieChart width={500} height={300}>
          <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {categoryData.map((entry, index)=>(
              <Cell
              key={index}
              fill={[
                "#0088FE",
                "#00C49F",
                "#FFBB28",
                "#FF8042",
                "#AF19FF",
                "#fe0000",
              ][index % 5]}
              />
            ))}
          </Pie>
          <Tooltip/>
          <Legend/>
        </PieChart>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl mt-8">
        <BarChart width={500} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey="amount" fill="#8884d8"/>
        </BarChart>
      </div>
    </div>
  )
}

export default Analytics;
