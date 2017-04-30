import React , { Component } from 'react';
//CSS
import robotIcon from '../../assets/roboticon.svg';
import './WatsonMessage.css'

export default class WatsonMessage extends Component {
    constructor(){
        super()
        this.state = {}
    }

    render() {
        if(this.props.username === "user"){
            return (
                <div className={`message ${this.props.username}`}>
                    <div className='user message-body'>
                        { this.props.message }
                    </div>
                </div>
            )
        }
        return (
            <div className={`message ${this.props.username}`}>
                <div className="robot-icon-container">
                    <img src={ robotIcon } className="robot-icon"/>
                </div>
                <div className='watson-message-body'>
                    { this.props.message }
                </div>
            </div>
        )
    }
}

WatsonMessage.defaultProps = {
    message: '',
    username: '',
};
