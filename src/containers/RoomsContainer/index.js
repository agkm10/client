import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//COMPONENTS
import NavBarTop from '../../components/Nav/index'
//LIBRARIES
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import moment from 'moment';
import Subheader from 'material-ui/Subheader';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
//EXPORTED FUNCTIONS
import { getChat,sendMessage } from '../../ducks/messageDuck'
//CSS
import "./RoomsContainer.css"

class RoomsContainer extends Component {
    constructor() {
        super()

        this.state = {
            message:''
        }

        this.handleSubmit = this.handleSubmit.bind( this )
   }

   componentWillMount(){
      this.props.getChat(
         this.props.messages,
         this.props.user.id
      )

   }

    handleSubmit( e ) {
        e.preventDefault();
        this.props.sendMessage(
            this.state.message
        )
    }

    handleChange( field, e ) {
        this.setState( { [ field ]: e.target.value } )
    }

    render() {

        const messageBox = this.props.messages.map( ( message, index ) => {
            if( message.type==='user' ){
                return(
                    <div className="message-container user" key={index}>
                        <h1>{message.message}</h1>
                        <h2>{moment(message.timestamp).format("MMM Do YY")}</h2>
                    </div>
                )
            }
            return(
                <div className="message-container" key={index}>
                  <h1>{message.message}</h1>
                  <h2>{moment(message.timestamp).format("MMM Do YY")}</h2>
                </div>
            )
        })

      return (
          <div>
              <NavBarTop/>
              <div className="room-container">
                  <div className="chat-container">
                      { messageBox }
                      <form onSubmit={ this.handleSubmit } className="message-input">
                          <TextField
                              hintText="Type a Message"
                              onChange={ this.handleChange.bind( this, 'message' ) }
                          />
                          <FlatButton
                              type="submit"
                              label="Send"
                              disabled={ !activeRoomIndex }
                              primary={ true }
                          />
                      </form>
                    </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps( state ) {
    return {
        messages:state.messageDuck.messages,
        user: state.authDuck.user,
        socket: state.authDuck.socket,
        loadingmessages: state.messageDuck.loadingmessages
    }
}

export default withRouter( connect( mapStateToProps, { getChat,sendMessage } )( RoomsContainer ) )
