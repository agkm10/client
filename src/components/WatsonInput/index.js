import React, {Component} from "react";
import "./WatsonInput.css"
import IconButton from 'material-ui/IconButton';
import {red500, cyan500, grey50} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';

export default class WatsonInput extends Component {
  constructor(props) {
    super(props);
    this.state = { chatInput: '' };

    // React ES6 does not bind 'this' to event handlers by default
    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
}
  submitHandler(event) {

  // Stop the form from refreshing the page on submit
  event.preventDefault();

  // Clear the input box
  this.setState({ chatInput: '' });

  // Call the onSend callback with the chatInput message
  this.props.onSend(this.state.chatInput);
}

textChangeHandler(event)  {
  this.setState({ chatInput: event.target.value });
}

render(){


return(

  <form className="chat-send-input-container" onSubmit={this.submitHandler}>
    <input 
      className="chat-input-text" type="text"
      onChange={this.textChangeHandler}
      value={this.state.chatInput}
    />

  <button className="chat-input-submit" type="submit" >
    <FontIcon
      className="material-icons"
      style={{fontSize: 25}}
      color={cyan500}
      hoverColor={cyan500}>
      send
    </FontIcon>
    </button>
  </form>



)


}

}
