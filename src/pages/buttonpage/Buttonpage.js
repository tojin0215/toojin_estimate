import React, { Component } from 'react';

import './Buttonpage.css';

const meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName('head')[0].appendChild(meta);

class Buttonpage extends Component {

    constructor(props) {
        super(props);
    };

    handleOnClick = async(e) => {
        this.props.history.push('/home');
    }
    render() {        
        return (
            <div className='quoteIntro'>
                <h1 className='logo'>투진 컴퍼니</h1>
                <form className="AddSalesForm">
                    <button className='btnEstimate' type="button" onClick={this.handleOnClick}> 견적하기 </button>
                </form>
            </div>
        );
    }
}

export default Buttonpage;