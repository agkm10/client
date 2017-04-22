import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import "./BizInfo.css"
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, cyan500} from 'material-ui/styles/colors';
import SaveButton from 'material-ui/svg-icons/file/cloud-upload';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

export default class BizInfo extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    const iconStyles = {
    marginRight: 10,
    fontSize: 14,
  }
  const inStyle = {
    width: '90%',
    fontSize: 25,
    fontWeight: 300,
  }
  const styles = {
  button: {
    margin: 20,
    fontWeight: 100,
  }
}
const pstyle = {
padding: 40,
width: 600,
}

  return(
  <main className="input-tile">
    <Paper style={pstyle} zDepth={1}>
    <div >
      <div className="input-header-title">General Business Info</div>
      <div className="input-description">Provide your business information for website.</div>
      <div>
         <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Business Name</p>
         <TextField className="hovertexttest" inputStyle={{textColor: red500}} underlineShow={false} style = {inStyle} hintText="" /><br/>
      </div>
      <div>
         <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Business Address</p>

         <TextField className="hovertexttest" inputStyle={false}  underlineShow={false} style = {inStyle} hintText="" /><br/>
       </div>
       <div>
          <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>City</p>
          <TextField className="hovertexttest" inputStyle={false}  underlineShow={false} style = {inStyle} hintText="" /><br/>
        </div>
        <div>
           <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>State</p>
           <TextField className="hovertexttest" inputStyle={false}  underlineShow={false} style = {inStyle} hintText="" /><br/>
         </div>
         <div>
            <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Contact Form Email Address</p>
            <TextField className="hovertexttest" inputStyle={false}  underlineShow={false} style = {inStyle} hintText="" /><br/>
          </div>
          <div className="save-button-inputs">

            <RaisedButton
              href="#fileup"
              label="SAVE"
              labelPosition="before"
              icon={<SaveButton />}
              style={styles.button}
              backgroundColor="#AE863C"
              labelColor="white"
              buttonStyle={{fontWeight: 100}}
            ></RaisedButton>

          </div>


    </div>
  </Paper>
  </main>
  )

  }
}
