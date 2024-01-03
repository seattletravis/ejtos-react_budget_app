import React, { useContext, useState } from "react"
import { AppContext } from '../context/AppContext';


const BudgetTotal = () => {
    const [budgetTotal, setBudgetTotal] = useState(0)

    const { dispatch, spentSoFar, errorMessage } = useContext(AppContext)

    const handleTotal = (e) => {
        setBudgetTotal(e.target.value)
        
        const item = {
            budgetTotal: e.target.value,
        }

        dispatch({
            type: 'CHANGE_TOTAL',
            payload: item
        })
    }

    
    return (
        <div className='alert alert-secondary'>
            <div>
                <label>
                    Total Budget: £
                    <input 
                        type="number"
                        value={budgetTotal}
                        onChange={handleTotal}  
                        max={20000}
                        step={10}        
                    />
                </label>
                <div>
                    <div>Total Budget: £{budgetTotal}</div>
                    <div>Budget Remaining: £{budgetTotal - spentSoFar}</div>
                    <div>Spent So Far: £{spentSoFar}</div>
                </div>
                <div>Message from System: {errorMessage}</div>
            </div>
        </div>
    )
}



export default BudgetTotal

