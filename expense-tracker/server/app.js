const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const transactionRoutes=require("./routes/transactionRoutes")
const budgetRoutes = require("./routes/budgetRoutes");
const authRoutes = require("./routes/authRoutes");
const app=express();


app.use(cors({
    origin: [
      "http://localhost:5173",
      "https://expense-tracker-dsg2.vercel.app/",
    ],
    credentials: true,
  }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Expense Tracker API is running...");
});

app.use("/api/transactions", transactionRoutes);

app.use("/api/budgets", budgetRoutes);

app.use("/api/auth", authRoutes);
module.exports=app;