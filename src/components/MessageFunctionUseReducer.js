import React, { useReducer, useState } from 'react';

let MessageFunctionUseReducer = () => {
    let initialise = {
        message: "Hello"
    };

    let reduceAction = (state = initialise, action) => {
        switch (action.type) {
            case "gm":
                return {
                    message: "Good Morning"
                }
            case "ga":
                return {
                    message: "Good Afternoon"
                }
            case "ge":
                return {
                    message: "Good Evening"
                }
            default:
                return state
        }
    }

    let [state, dispatch] = useReducer(reduceAction, initialise);

    return (
        <React.Fragment>
            <div className='container'>
                <div className='card mt-5 bg-success'>
                    <div className='card-header'>
                        <h3 className='text-white font-weight-bold text-center'>Function based useReducer by action object</h3>
                    </div>
                    <div className='card-body'>
                        <h3 className='text-white'>{state.message}</h3>
                        <div>
                            <button className='btn btn-success btn-md mr-5' onClick={(e) => dispatch({ type: "gm" })}>Good Morning</button>
                            <button className='btn btn-warning btn-md mr-5' onClick={(e) => dispatch({ type: "ga" })}>Good Afternoon</button>
                            <button className='btn btn-danger btn-md mr-5' onClick={(e) => dispatch({ type: "ge" })}>Good Evening</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MessageFunctionUseReducer;