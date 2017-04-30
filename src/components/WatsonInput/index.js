import React, { Component } from 'react';
//MATERIAL UI
import IconButton from 'material-ui/IconButton';
import { red500, cyan500, grey50 } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
//CSS
import './WatsonInput.css';

export default class WatsonInput extends Component {
    constructor(){
        super()

        this.state = { chatInput: '' };

        // React ES6 does not bind 'this' to event handlers by default
        this.submitHandler = this.submitHandler.bind( this );
        this.textChangeHandler = this.textChangeHandler.bind( this );
    }

    submitHandler( e ) {
        // Stop the form from refreshing the page on submit
        e.preventDefault();
        // Clear the input box
        this.setState( { chatInput: '' } );
        // Call the onSend callback with the chatInput message
        this.props.onSend( this.state.chatInput );
    }

    textChangeHandler( e )  {
        this.setState( { chatInput: e.target.value } )
    }

    render() {


        return(

            <form className="chat-send-input-container" onSubmit={ this.submitHandler }>
                <input
                    className="chat-input-text" type="text"
                    onChange={ this.textChangeHandler }
                    value={ this.state.chatInput }
                />
                <button className="chat-input-submit" type="submit" >
                    <FontIcon
                        className="material-icons"
                        style={ { fontSize: 25 } }
                        color={ cyan500 }
                        hoverColor={ cyan500 }>
                        send
                    </FontIcon>
                </button>
            </form>
        )
    }
}
