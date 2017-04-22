import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import "./WebPages.css"
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, cyan500, grey400} from 'material-ui/styles/colors';
import SaveButton from 'material-ui/svg-icons/file/cloud-upload';
import AddButton from 'material-ui/svg-icons/action/note-add';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

export default class WebPages extends Component {
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
      <div className="input-header-title">Website Pages Content</div>
      <div className="input-description">Enter your Page Title & Text Content for that Page. Add as many pages as you need.</div>
      <div className="flex-delete-div">
        <div className="placeholderinputs left-flex-delete"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Page Title </div>
         <div id="delete-page"><FontIcon className="material-icons" style={iconStyles} color={grey400} hoverColor={red500}>delete_forever</FontIcon>delete page</div>
      </div>
      <TextField className="hovertexttest" inputStyle={false} underlineShow={false} style = {inStyle} hintText="" />
      <div>
        <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500} >arrow_forward</FontIcon>Page Content</p>
        <TextField
          className="hovertexttest"
          inputStyle={false}
          underlineShow={false}
          style = {inStyle}
          hintText=""
          multiLine={true}
          rows={4}
        /><br/>
      </div>
      <div>
        <RaisedButton
          
          label="ADD NEW PAGE"
          labelPosition="before"
          icon={<AddButton />}
          style={styles.button}
          backgroundColor="#0E4341"
          labelColor="white"
          buttonStyle={{fontWeight: 100}}
        ></RaisedButton>
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
