import React from 'react';
import ExpenseItem from './ExpenseItem';
import "./ExpensesList.css";

const ExpensesList = ({items}) => {
if(items.length === 0){
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
}

  return (
    <ul className='expenses-list'>
        {
items.map((exp)=>(
    <ExpenseItem key={exp.id} expenz={exp}/>
))
        }

    </ul>
  
  )
}

export default ExpensesList
