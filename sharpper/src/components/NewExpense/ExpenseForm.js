import React, { useState } from 'react';

import "./ExpenseForm.css"

const ExpenseForm = () => {
  const [enteredTitle , setTitle] = useState('') ;
  const [enteredAmount , setAmount] = useState('') ;
  const [enteredDate , setDate] = useState('') ;
  const changeTitle = (event)=>{
    setTitle(event.target.value)
  } 

  const changeAmount = (event)=>{
    setAmount(event.target.value)
  }
  const changeDate = (event)=>{
    setDate(event.target.value)
  }

  const submitHandler =(e)=>{
e.preventDefault() ;
const expenseData = {
  title : enteredTitle ,
  amount : enteredAmount ,
  date : new Date(enteredDate) 
}
console.log(expenseData) ;
  }


  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input onChange={changeTitle} type='text' />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input onChange={changeAmount} type='number' min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input onChange={changeDate} type='date' min='2019-01-01' max='2022-12-31' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;