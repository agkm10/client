import React, {Component} from "react";
import {connect} from 'react-redux';
import "./WatsonChat.css";
import IconButton from 'material-ui/IconButton';
import {red500, cyan500, grey50} from 'material-ui/styles/colors';
// import Send from 'material-ui/svg-icons/content/send';
import WatsonInput from "../WatsonInput/index"
import WatsonMessages from "../WatsonMessages/index"
import axiosLibrary from 'axios';
const axios = axiosLibrary.create({ withCredentials: true });
import {clearSystemWatson} from '../../ducks/messageDuck'


class WatsonChat extends Component {
  constructor(){
    super();
    this.state = {
      messages: [{username: "Watson", message: "Hey Welcome to Goldsage Client Portal, let me know you have any questions regarding the form!", fromMe: true}]
  }
  this.addMessage = this.addMessage.bind(this);
  this.sendHandler = this.sendHandler.bind(this);
}

componentWillReceiveProps(nextProps) {
  console.log(nextProps)
  if (nextProps.systemWatsonMessage) {
    this.systemHandlerBilling(nextProps.systemWatsonMessage)
  }
}

systemHandlerBilling(message){
console.log(message)
  axios.post("http://localhost:3002/api/watson/message", {message}).then(response => {
    console.log("response from watson", response);
    // Here's our chance to programatically respond to Watson
    // if (response.data.includes("Great, let's go to")) {
       // Possibly change location, do something else and then post our own message to watson
    //}
    const newMessage = {
      username: 'watson',
      message: response.data,
    }
    this.addMessage(newMessage)
    this.props.clearSystemWatson()
  })

}


sendHandler(message) {

  // If we want to intercept user's message and direct to live chat
  //  if (message.includes("")) {
    // if we want to send the message to watson
    // post to watson
    // add to this.state.messages
  //} else if (message.includes("system")) {
    // if we recognize the user's question and want to intercept
    // post our own message to watson
    // post his reponse
  //}

  const messageObject = {
    username: "user",
    message,
  };
  this.addMessage(messageObject);


  // Emit the message to the server
  // TODO Add database call below
  axios.post("http://localhost:3002/api/watson/message", messageObject).then(response => {
    console.log(response);
    // Here's our chance to programatically respond to Watson
    // if (response.data.includes("Great, let's go to")) {
       // Possibly change location, do something else and then post our own message to watson
    //}
    const newMessage = {
      username: 'watson',
      message: response.data,
    }
    this.addMessage(newMessage)
  })

}

addMessage(message){
console.log(message);
  // Append the message to the component state
  const messages = this.state.messages;
  messages.push(message);
  this.setState({ messages },()=>{console.log(this.state.messages)});

  // To avoid mutating the state:
  // const messages = this.state.messages
  // this.setState({messages: [...messages, message]})
}




render(){

  return(
  <main className="chat-container">
    <div className="chat-messages-container">
      <WatsonMessages messages={this.state.messages}/>
    </div>
    <WatsonInput onSend={this.sendHandler}/>
  </main>
  )

  }

}
function mapStateToProps(state) {
  return {
    systemWatsonMessage: state.messageDuck.watsonMessage
  }
}

export default connect(mapStateToProps, {clearSystemWatson})(WatsonChat)
