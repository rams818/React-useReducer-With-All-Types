import React, { useReducer, useState } from 'react';

let MessageReduxUseReducer = () => {
    let initialise = "Hello";

    const GOOD_MORNING = "GOOD_MORNING";
    const GOOD_AFTERNOON = "GOOD_AFTERNOON";
    const GOOD_EVENING = "GOOD_EVENING";

    let sayGoodMorning = () => {
        return GOOD_MORNING;
    }

    let sayGoodAfernoon = () => {
        return GOOD_AFTERNOON;
    }

    let sayGoodEvening = () => {
        return GOOD_EVENING;
    }

    let reduceAction = (state = initialise, action) => {
        switch (action) {
            case "GOOD_MORNING":
                return "Good Morning";
            case "GOOD_AFTERNOON":
                return "Good Afternoon";
            case "GOOD_EVENING":
                return "Good Evening";
            default:
                return state
        }
    }

    let [state, dispatch] = useReducer(reduceAction, initialise);

    return (
        <React.Fragment>
            <div className='container'>
                <div className='card mt-5 bg-danger'>
                    <div className='card-header'>
                        <h3 className='text-white font-weight-bold text-center'>Redux based useReducer</h3>
                    </div>
                    <div className='card-body'>
                        <h3 className='text-white'>{state}</h3>
                        <div>
                            <button className='btn btn-success btn-md mr-5' onClick={(e) => dispatch(sayGoodMorning())}>Good Morning</button>
                            <button className='btn btn-warning btn-md mr-5' onClick={(e) => dispatch(sayGoodAfernoon())}>Good Afternoon</button>
                            <button className='btn btn-danger btn-md mr-5' onClick={(e) => dispatch(sayGoodEvening())}>Good Evening</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MessageReduxUseReducer;