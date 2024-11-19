import React, { useReducer, useState } from 'react';

let MessageFunctionUseReducerString = () => {
    let initialise = "Hello";

    let reduceAction = (state = initialise, action) => {
        switch (action) {
            case "gm":
                return "Good Morning";
            case "ga":
                return "Good Afternoon";
            case "ge":
                return "Good Evening";
            default:
                return state
        }
    }

    let [state, dispatch] = useReducer(reduceAction, initialise);

    return (
        <React.Fragment>
            <div className='container'>
                <div className='card mt-5 bg-secondary'>
                    <div className='card-header'>
                        <h3 className='text-white font-weight-bold text-center'>Function based useReducer by action String</h3>
                    </div>
                    <div className='card-body'>
                        <h3 className='text-white'>{state}</h3>
                        <div>
                            <button className='btn btn-success btn-md mr-5' onClick={(e) => dispatch("gm")}>Good Morning</button>
                            <button className='btn btn-warning btn-md mr-5' onClick={(e) => dispatch("ga")}>Good Afternoon</button>
                            <button className='btn btn-danger btn-md mr-5' onClick={(e) => dispatch("ge")}>Good Evening</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MessageFunctionUseReducerString;