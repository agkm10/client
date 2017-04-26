import React, {Component} from "react";
import "./WatsonChat.css";
import IconButton from 'material-ui/IconButton';
import {red500, cyan500, grey50} from 'material-ui/styles/colors';
// import Send from 'material-ui/svg-icons/content/send';

import FontIcon from 'material-ui/FontIcon';



export default class WatsonChat extends Component {
  constructor(){
    super();
    this.state = {
}
}

render(){

  return(
  <main className="chat-container">
    <div className="chat-messages-container">

    </div>
      <form className="chat-send-input-container">
     <input className="chat-input-text" type="text" />

      <button className="chat-input-submit btn" type="submit" >
     <FontIcon
       className="material-icons"
       style={{fontSize: 16}}
       color={grey50}
       hoverColor={cyan500} >send</FontIcon> </button>
      </form>

  </main>
  )

  }

}
