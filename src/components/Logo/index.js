import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import "./Logo.css"
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, cyan500} from 'material-ui/styles/colors';
import UploadButton from 'material-ui/svg-icons/file/file-upload';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

export default class LogoUpload extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render(){

  const styles = {
  button: {
    margin: 20,
    fontWeight: 100,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  }
}

const pstyle = {
  padding: 40,
  width: 600,
}

  return(
  <main className="input-tile">
    <Paper style={pstyle} zDepth={1}>
    <div id="fileup">
      <div className="input-header-title">Upload Your Logo</div>
      <div className="input-description">Prefer Vector but accept these files: .jpeg .pdf .ai .psd .png .svg </div>
          <div className="save-button-inputs">
            <RaisedButton
              label="FILE UPLOAD"
              labelPosition="before"
              icon={<UploadButton />}
              style={styles.button}
              backgroundColor="#AE863C"
              labelColor="white"
              buttonStyle={{fontWeight: 100}}
              containerElement="label"
            >
              <input type="file" style={styles.exampleImageInput} />
            </RaisedButton>
          </div>


    </div>
  </Paper>
  </main>
  )

  }
}
