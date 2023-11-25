import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [amt , setamt] =  useState(props.amount)
  const editAmt= ()=>{
    console.log("clicked")
    setamt(100) ;
console.log(amt)
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${amt}</div>
      </div>
      <button onClick={editAmt}>100$</button>
    </Card>
  );
}

export default ExpenseItem;
