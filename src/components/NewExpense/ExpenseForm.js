import React, {useState} from 'react';
import "./ExpenseForm.css";

const initialValue = {
    title:"",
    amount:"",
    date:""
}

const ExpenseForm = ({onSaveExpenseData}) => {
    const [inputValue,setInputValue] = useState(initialValue)

const handleTitle = (event)=>{
setInputValue((defaultValue)=>{
    return {...defaultValue, title:event.target.value}
})
};

const handleAmount = (event)=>{
    setInputValue((defaultValue)=>{
        return {...defaultValue, amount:event.target.value}
    })
};

const handleDate = (event)=>{
    setInputValue((defaultValue)=>{
        return {...defaultValue, date:event.target.value}
    })
};

const {title,amount,date} = inputValue

const handleSubmit = (e)=>{
    e.preventDefault();
    const expenseData = {
        title:title,
        amount:+amount,

        date:new Date(date),
    }
    // console.log(expenseData);
    onSaveExpenseData(expenseData);
    setInputValue(initialValue)
};


  return (
      <form onSubmit={handleSubmit}>
<div className='new-expense__controls'>
    <div className='new-expense__control'>
        <label htmlFor='title'>Title</label>
        <input type="text" name='title' onChange={handleTitle} value={title}/>

    </div>
    <div className='new-expense__control'>
        <label htmlFor='amount' >Amount</label>
        <input type="number" min="0.01" step="0.01" name='amount'  onChange={handleAmount} value={amount}/>

    </div>
    <div className='new-expense__control'>
        <label htmlFor='date'>Date</label>
        <input type="date" name='date' min="2020-12-31" max="2025-12-30"  onChange={handleDate} value={date}/>

    </div>

</div>
<div className='new-expense__actions'>
<button type='submit' value="Submit">Add Expense</button>
</div>
      </form>
  )
}

export default ExpenseForm
