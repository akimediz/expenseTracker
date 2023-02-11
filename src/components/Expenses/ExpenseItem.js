import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = ({expenz}) => {
 const {title,amount,date} = expenz;

// const [titleName,setTitleName] = useState(title)
  
// return(
//     expenz.map((exp)=>{
//     const {title,date,amount} = exp;

// const clickHandler = ()=>{
//     setTitleName("Name Updated !")
// }


        return(
            <Card className='expense-item'>
                <ExpenseDate myDate={date}/>
          
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
       
        )
    // }
    // )

// )
   
   
}

export default ExpenseItem
