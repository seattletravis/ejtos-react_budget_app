import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleAddTen = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'ADD_TEN',
            payload: item,
        });
    };

    const handleRedTen = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'RED_TEN',
            payload: item,
        });
    };


    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.quantity}</td>
            <td><FaTimesCircle size='2.2em' color="green" onClick={handleAddTen}></FaTimesCircle></td>
            <td><FaTimesCircle size='2.2em' color="red" onClick={handleRedTen}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;
