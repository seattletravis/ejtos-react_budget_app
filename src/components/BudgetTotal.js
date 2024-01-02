import React, { useContext, useState } from "react"
import { AppContext } from '../context/AppContext';

const BudgetTotal = (props) => {

    const {expenses } = useContext(AppContext)
        
    let spentSoFar = expenses.reduce((sum, expense)=>{
        return sum + expense.quantity}, 0)
    
    const [budgetTotal, setBudgetTotal] = useState(2000)



    return (
        <div className="budget">
            <div>
                <div>Total Budget: {budgetTotal}</div>
                <div>Budget Remaining: £{budgetTotal - spentSoFar}</div>
                <div>Spent So Far: £{spentSoFar}</div>
            </div>
        </div>
    )
}



export default BudgetTotal

