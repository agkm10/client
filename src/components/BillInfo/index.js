import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import "./BillInfo.css"
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, cyan500} from 'material-ui/styles/colors';
import SaveButton from 'material-ui/svg-icons/file/cloud-upload';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

export default class BillInfo extends Component {
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
      <div className="input-header-title">Billing Information</div>
      <div className="input-description">This is for Goldsage Billing Contact Info and payment processing</div>
      <div>
         <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Billing Point of Contact Name</p>
         <TextField className="hovertexttest" inputStyle={false} underlineShow={false} style = {inStyle} hintText="" /><br/>
      </div>
      <div>
         <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Direct Phone Number</p>
         <TextField className="hovertexttest" inputStyle={false} underlineShow={false} style = {inStyle} hintText="" /><br/>
      </div>
      <div>
         <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Email</p>
         <TextField className="hovertexttest" inputStyle={false} underlineShow={false} style = {inStyle} hintText="" /><br/>
      </div>
      <div>
         <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Billing Address</p>

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
            <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Zip Code</p>
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
