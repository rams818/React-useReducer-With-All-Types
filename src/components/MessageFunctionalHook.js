import React, { useState } from 'react';

let MessageFunctionalHook = () => {
    let [message, setMessage] = useState("Hello")

    return (
        <React.Fragment>
            <div className='container'>
                <div className='card mt-5 bg-warning'>
                    <div className='card-header'>
                        <h3 className='text-white font-weight-bold text-center'>Function based Component</h3>
                    </div>
                    <div className='card-body'>
                        <h3 className='text-white'>{message}</h3>
                        <div>
                            <button className='btn btn-success btn-md mr-5' onClick={(e) => setMessage("Good Morning")}>Good Morning</button>
                            <button className='btn btn-warning btn-md mr-5' onClick={(e) => setMessage("Good Afternoon")}>Good Afternoon</button>
                            <button className='btn btn-danger btn-md mr-5' onClick={(e) => setMessage("Good Evening")}>Good Evening</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MessageFunctionalHook;