function TransactionItem({title, amount}){
  return(
    <div className="flex justify-between border-b py-3">
      <span>{title}</span>
      <span>${amount}</span>
    </div>
  )   
} 

export default TransactionItem;