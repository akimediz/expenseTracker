import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  {id:"e1",title:"Car ", amount:287.64, date: new Date(2022,11,20)},
  {id:"e2",title:"Money ", amount:300.64, date: new Date(2020,17,18)}
,
{id:"e3",title:"Motto", amount:450.34, date: new Date(2018,11,20)}
,
{id:"e4",title:"Pensions", amount:630.21, date: new Date(2023,0,5)}
]

const App = ()=> {
  

const [expensez,setExpense] = useState(dummy_expenses);

  const newExpenseItem = (expenseData)=>{
 console.log(expenseData);
    setExpense((prevValue) =>{
      return [expenseData, ...prevValue]
    });
 console.log(expensez);

  };
 

  return (
    <div>
     <NewExpense expenseDataz={newExpenseItem}/>
      <Expenses expenses={expensez}/>
    </div>
  );
}

export default App;
