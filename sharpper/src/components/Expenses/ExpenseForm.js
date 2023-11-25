import React from "react"
const ExpenseForm= ()=>{
    return (<div>
<form>
<label for="title">title</label><br/>
    <input type="text" id="title" name="title"/><br/><br/>
  
    <label for="amount">amount</label><br/>
    <input type="number" id="amount" name="amount"/><br/><br/>

    <label for="date">date</label><br/>
    <input type="number" id="date" name="date"/><br/><br/>
  
    
  
    <button type="submit">Submit</button>
</form>

    </div>)
}


export default ExpenseForm; 