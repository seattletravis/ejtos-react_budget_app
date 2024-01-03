import React, { useContext, useState } from "react"
import { AppContext } from '../context/AppContext';

const BudgetTotal = () => {
    const [budgetTotal, setBudgetTotal] = useState(0)
    // const [spentSoFar, setSpentSoFar] = useState(0)

    const { expenses } = useContext(AppContext)
    let spentSoFar = expenses.reduce((sum, expense)=>{
        return sum + expense.quantity}, 0)
    // setSpentSoFar(spent)

    const { dispatch } = useContext(AppContext)
    const handleTotal = (e) => {
        setBudgetTotal(e.target.value)
        const item = {
            budgetTotal: e.target.value,
            spentSoFar: spentSoFar
        }

        dispatch({
            type: 'CHANGE_TOTAL',
            payload: item
        })
    }


    



    // const handleTotal = (e) => {
    //     setBudgetTotal(e.target.value)
    // }

    
    return (
        <div className="budget">
            <div>
                <label>
                    Total Budget: 
                    <input 
                        type="number"
                        value={budgetTotal}
                        onChange={handleTotal}          
                    />
                </label>
                <div>Total Budget: £{budgetTotal}</div>
                <div>Budget Remaining: £{budgetTotal - spentSoFar}</div>
                <div>Spent So Far: £{spentSoFar}</div>
            </div>
        </div>
    )
}



export default BudgetTotal

