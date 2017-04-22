import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import "./Design.css"
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, cyan500, grey400} from 'material-ui/styles/colors';
import SaveButton from 'material-ui/svg-icons/file/cloud-upload';
import AddButton from 'material-ui/svg-icons/action/note-add';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

export default class Design extends Component {
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
      <div className="input-header-title">Design</div>
      <div className="input-description">These questions are designed to help us with our design and build process.</div>

      <div>
        <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500} >arrow_forward</FontIcon>Who is visiting your site? Be specific as to what type of person or customer is visiting your site.</p>
        <TextField
          className="hovertexttest"
          inputStyle={false}
          underlineShow={false}
          style = {inStyle}
          hintText=""
          multiLine={true}
          rows={3}
        /><br/>
      </div>
      <div>
        <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500} >arrow_forward</FontIcon>What do you want them to do when they come to your site? What ACTION? </p>
        <TextField
          className="hovertexttest"
          inputStyle={false}
          underlineShow={false}
          style = {inStyle}
          hintText=""
          multiLine={true}
          rows={3}
        /><br/>
      </div>
      <div>
        <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500} >arrow_forward</FontIcon>List of any Example Websites you like? Enter URL below.</p>
        <TextField
          className="hovertexttest"
          inputStyle={false}
          underlineShow={false}
          style = {inStyle}
          hintText=""
          multiLine={true}
          rows={3}
        /><br/>
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
