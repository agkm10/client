import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  APISERVERPATH  } from '../../config.json';
const BASE_URL = APISERVERPATH;
//MATERIAL UI
import IconButton from 'material-ui/IconButton';
import { red500, cyan500, grey50 } from 'material-ui/styles/colors';
//COMPONENTS
import WatsonInput from '../WatsonInput/index';
import WatsonMessages from '../WatsonMessages/index';
//LIBRARIES
import axiosLibrary from 'axios';
const axios = axiosLibrary.create( { withCredentials: true } );
//EXPORTED FUNCTIONS
import { clearSystemWatson } from '../../ducks/messageDuck';
//CSS
import './WatsonChat.css';

class WatsonChat extends Component {
    constructor(){
        super()
        this.state = {
            messages: [ { username: "Watson", message: "Hey Welcome to Goldsage Client Portal, let me know you have any questions regarding the form!", fromMe: true } ]
        }

        this.addMessage = this.addMessage.bind( this )
        this.sendHandler = this.sendHandler.bind( this )
    }

    componentWillReceiveProps( nextProps ) {
        if ( nextProps.systemWatsonMessage ) {
            this.systemHandlerBilling( nextProps.systemWatsonMessage )
        }
    }

    systemHandlerBilling( message ){
        axios.post( BASE_URL + "/watson/message", { message } )
        .then( response => {
        // Here's our chance to programatically respond to Watson
        // Possibly change location, do something else and then post our own message to watson
            const newMessage = {
                username: 'watson',
                message: response.data
            }

            this.addMessage( newMessage )
            this.props.clearSystemWatson()
        } )
    }


    sendHandler( message ) {
        // If we want to intercept user's message and direct to live chat
        const messageObject = {
            username: "user",
            message
        }
        this.addMessage( messageObject )

        axios.post( BASE_URL + "/watson/message", messageObject )
        .then( response => {
        // Here's our chance to programatically respond to Watson
            const newMessage = {
                username: 'watson',
                message: response.data,
            }
            this.addMessage( newMessage )
        } )
    }

    addMessage( message ){
        const messages = this.state.messages;
        messages.push( message );
        this.setState( { messages } );
    }

    render(){
        return(
            <main className="chat-container">
                <div className="chat-messages-container">
                    <WatsonMessages messages={ this.state.messages }/>
                </div>
                <WatsonInput onSend={ this.sendHandler }/>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        systemWatsonMessage: state.messageDuck.watsonMessage
    }
}

export default connect( mapStateToProps, { clearSystemWatson } )( WatsonChat )
