import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleAddTen = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'ADD_TEN',
            payload: item,
        });
    };


    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            {/* <td>{Location}{parseInt(props.unitprice)}</td> */}
            {/* <td>{Location}{parseInt(props.quantity)*parseInt(props.unitprice)}</td> */}
            <td><FaTimesCircle size='2.2em' color="green" onClick={handleAddTen}></FaTimesCircle></td>
            <td><FaTimesCircle size='2.2em' color="red" onClick={handleAddTen}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;
