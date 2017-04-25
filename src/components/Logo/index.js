import React, {Component} from "react";
import {connect} from "react-redux";
import {uploadFile, getFiles} from '../../ducks/inputDuck'
import TextField from 'material-ui/TextField';
import "./Logo.css"
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500, cyan500, greenA700} from 'material-ui/styles/colors';
import UploadButton from 'material-ui/svg-icons/file/file-upload';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import SaveButton from 'material-ui/svg-icons/file/cloud-upload';


class LogoUpload extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      dropboxFiles: [],
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({dropboxFiles: nextProps.dropboxFiles})
  }
  _uploadFile() {
    this.props.uploadFile()
  }
  componentDidMount() {
    this.props.getFiles()
  }
    handleTouchTap = () => {
        this.setState({
          open: true,
        });
      };
      handleRequestClose = () => {
      this.setState({
        open: false,
      });
    };

  render(){
  var {dropboxFiles}=this.state

    const dropboxFileUploads = dropboxFiles.map(file => {
      return (
        <div key={file.id}>
          {file.name}
        </div>
      )
    })
    const iconStyles = {
    marginRight: 10,
    fontSize: 14,
  }

  const styles = {
  button: {
    margin: 20,
    rippleStyle: cyan500
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
      <div className="input-description">
      <FontIcon style={{iconStyles}} className="material-icons" color={greenA700}>cloud_done</FontIcon>
      Files Uploaded: {dropboxFileUploads}
      </div>
          <div className="save-button-inputs">
            <RaisedButton
              label="CHOOSE FILE"
              labelPosition="before"
              icon={<UploadButton />}
              style={styles.button}
              backgroundColor="#1C333D"
              labelColor="white"
              buttonStyle={{fontWeight: 100}}
              containerElement="label"
              onTouchTap={this.handleTouchTap}


            >
              <input id="file-upload" type="file" style={styles.exampleImageInput} />
            </RaisedButton>

            <RaisedButton
              // href="#fileup"
              label="SAVE"
              labelPosition="before"
              icon={<SaveButton />}
              style={styles.button}
              backgroundColor="#AE863C"
              labelColor="white"
              buttonStyle={{fontWeight: 100}}
              onClick={this._uploadFile.bind(this)}
            ></RaisedButton>

          </div>


    </div>
  </Paper>
  </main>
  )

  }
}
function mapStateToProps(state) {
  return {dropboxFiles: state.uploadDuck.dropboxFiles};
}
export default connect(mapStateToProps, {uploadFile, getFiles})(LogoUpload);
