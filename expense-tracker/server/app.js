const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const transactionRoutes=require("./routes/transactionRoutes")
const app=express();


app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Expense Tracker API is running...");
});

app.use("/api/transactions", transactionRoutes);

module.exports=app;