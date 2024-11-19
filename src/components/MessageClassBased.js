import React from 'react';

class MessageClassBased extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello"
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='card mt-5 bg-info'>
                        <div className='card-header'>
                            <h3 className='text-white font-weight-bold text-center'>Class based Component</h3>
                        </div>
                        <div className='card-body'>
                            <h3 className='text-white'>{this.state.message}</h3>
                            <div>
                                <button className='btn btn-success btn-md mr-5' onClick={(e) => this.setState({ message: "Good Morning" })}>Good Morning</button>
                                <button className='btn btn-warning btn-md mr-5' onClick={(e) => this.setState({ message: "Good Afternoon" })}>Good Afternoon</button>
                                <button className='btn btn-danger btn-md mr-5' onClick={(e) => this.setState({ message: "Good Evening" })}>Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MessageClassBased;