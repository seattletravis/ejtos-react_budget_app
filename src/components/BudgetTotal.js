import React, { useContext, useState } from "react"
import { AppContext } from '../context/AppContext';

const BudgetTotal = (props) => {

    const {expenses } = useContext(AppContext)
        
    let spentSoFar = expenses.reduce((sum, expense)=>{
        return sum + expense.quantity}, 0)
    
    const [budgetTotal, setBudgetTotal] = useState(0)
    // function handleChange(){
    //     setBudgetTotal(this.value)
    // }


    return (
        <div className="budget">
            <div>
                {/* <div>Total Budget: {budgetTotal}</div> */}
                <label>
                    Total Budget: 
                    <input 
                        type="number"
                        value={budgetTotal}
                        onChange={(e)=>{setBudgetTotal(e.target.value)}}             
                    />
                </label>
                {/* <div>Total Budget: £{budgetTotal}</div> */}
                <div>Budget Remaining: £{budgetTotal - spentSoFar}</div>
                <div>Spent So Far: £{spentSoFar}</div>
            </div>
        </div>
    )
}



export default BudgetTotal

