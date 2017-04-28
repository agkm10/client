import React, {Component} from "react";
import "./WatsonMessages.css"
import WatsonMessage from "../WatsonMessage/index"




export default class WatsonMessages extends Component {
  constructor(){
    super();
    this.state= {}
  }
  componentDidUpdate() {
  // There is a new message in the state, scroll to bottom of list
  const objDiv = document.getElementById('messageList');
  objDiv.scrollTop = objDiv.scrollHeight;
}


  render() {
    // Loop through all the messages in the state and create a Message component
    const messages = this.props.messages.map((message, i) => {
        return (
          <WatsonMessage
            key={i}
            username={message.username}
            message={message.message}/>
        );
      });

    return (
      <div className='messages' id='messageList'>
        { messages }
      </div>
    );
  }

}
WatsonMessages.defaultProps = {
  messages: []
};
