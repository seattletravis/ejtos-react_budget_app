import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import BudgetTotal from './components/BudgetTotal';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'> 
                    <div className='col-sm'>
                        <BudgetTotal />
                    </div>
                    <div className='col-sm'>
                        <Location />
                    </div>
                </div>

                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Add Items</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ItemSelected/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
