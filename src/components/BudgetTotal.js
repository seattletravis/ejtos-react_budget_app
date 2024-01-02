import React, { useState } from "react"

const BudgetTotal = () => {

    const budgetTotal = useState(2000)
    const budgetRemaining = useState(2000)
    const budgetSpent = useState(0)

    

    return (
        <div>
            <div>Budget Total: {budgetTotal}</div>
            <div>Budget Remaining: {budgetRemaining}</div>
            <div>Budget Spent So Far: {budgetSpent}</div>
        </div>
    )
}



export default BudgetTotal

