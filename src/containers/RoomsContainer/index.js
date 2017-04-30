import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
//COMPONENTS
import NavBarTop from '../../components/Nav/index'
//LIBRARIES
import moment from 'moment';
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
//EXPORTED FUNCTIONS
import { getChat, sendMessage, comploaded, compunloaded } from '../../ducks/messageDuck'
//CSS
import "./RoomsContainer.css"

const renderTextField = ( { input, label, meta: { touched, error }, ...custom } ) => (
   <TextField
      hintText={ label }
      errorText={ touched && error }
      { ...input }
      { ...custom }
   />
)

class RoomsContainer extends Component {
   constructor() {
      super()

      this.state = {
         message:''
      }

      this.handleSubmit = this.handleSubmit.bind( this )
   }

   handleSubmit( e ) {
      e.preventDefault();
      this.props.sendMessage(
         this.props.messages[ 0 ].chat_id,
         this.props.user.id,
         this.state.message
      )
   }

   handleChange( field, e ) {
      this.setState( { [ field ]: e.target.value } )
   }

   componentDidMount() {
      this.props.getChat(
         this.props.user.id
      )
      this.props.comploaded()
   }

   componentWillUnmount() {
      this.props.compunloaded()
   }

   render() {
      const { pristine, messages } = this.props

      const messageBox = messages.map( ( message, index ) => {
         if( message.type==='user' ){
            return(
               <div className="message-container user" key={ index }>
                  <h1>{ message.message }</h1>
                  <h2>{ moment( message.timestamp ).format( "MMM Do YY" ) }</h2>
               </div>
            )
         }
         return(
            <div className="message-container" key={ index }>
               <h1>{ message.message }</h1>
               <h2>{ moment( message.timestamp ).format( "MMM Do YY" ) }</h2>
            </div>
         )
      })

      return (
         <div>
            <NavBarTop/>
            <div className="room-container">
               <div className="mchat-container">
                  { messageBox }
                  <form onSubmit={ this.handleSubmit } className="message-input">
                     <Field
                        label="Type a Message"
                        name="message"
                        component={ renderTextField }
                        onChange={ this.handleChange.bind( this, 'message' ) }
                     />
                     <FlatButton
                        type="submit"
                        label="Send"
                        disabled={ !this.state.message || pristine }
                        primary={ true }
                     />
                  </form>
               </div>
            </div>
         </div>
      )
   }
}

const form = reduxForm({
   form: 'messageForm'
})

const mapStateToProps = ( state ) => {
   return {
       messages:state.messageDuck.messages,
       user: state.authDuck.user
   }
}

export default withRouter( connect( mapStateToProps, { getChat, sendMessage, comploaded, compunloaded } )( form( RoomsContainer ) ) )
