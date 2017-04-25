import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import "./billinginfo.css"
import FontIcon from 'material-ui/FontIcon';
import {blue500} from 'material-ui/styles/colors';
import {connect} from "react-redux";
import {setInputs, getInputs} from '../../ducks/inputDuck'
import {uploadFile, getFiles} from '../../ducks/uploadDuck'

class TestComp2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputReturnValues: {},
      firstname: "",
      lastname: "",
      company: "",
      dynamicText: [
        {
          text1: "",
          text2: "",
          index: 0
        }
      ],
      dropboxFiles: [],
      fileUploadToast: false,
      fileName: " "
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({firstname: nextProps.inputReturnValues.data[0].firstname})
    this.setState({lastname: nextProps.inputReturnValues.data[0].lastname})
    this.setState({company: nextProps.inputReturnValues.data[0].company})
    this.setState({dynamicText: nextProps.inputReturnValues.data[0].websites})
    this.setState({dropboxFiles: nextProps.dropboxFiles})
    // this.setState({fileUploadToast: nextProps.fileUploadToast})
    // this.setState({fileName: nextProps.fileName})
  }
  handleChange(field, e) {
    this.setState({[field]: e.target.value})

  }
  _uploadFile() {
    this.props.uploadFile()
    alert(this.props.fileName+'uploaded succesfully')
  }
  _getFiles() {}
  _handleDynamicChange(field, e) {
    var newDynamicText = this.state.dynamicText.slice(0)
    newDynamicText[field[0]][field[1]] = e.target.value
    this.setState(newDynamicText)
  }
  componentDidMount() {
    this.props.getInputs()
    this.props.getFiles()
  }
  addInputs() {
    var arrayvar = this.state.dynamicText.slice(0)
    arrayvar.push({text1: "", text2: "", index: arrayvar.length})
    this.setState({dynamicText: arrayvar})
  }
  runToast() {

  }
  removeDynamicText(field) {
    var arrayvar2 = this.state.dynamicText.slice(0)
    arrayvar2.splice(field, 1)
    for (let i = 0; i < arrayvar2.length; ++i) {
      arrayvar2[i].index = i;
    }
    this.setState({dynamicText: arrayvar2})
  }


  saveInputs() {
    var componentCompleted = {
      component: "TestComp2",
      completed: false
    }
    const inputsToServer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      company: this.state.company,
      websites: JSON.stringify(this.state.dynamicText)
    }
    var completeCheck = true;
    for(var stateCheck in inputsToServer) {
      if (!inputsToServer[stateCheck]) {
        completeCheck = false;
      }
    }
    if (completeCheck) {
      componentCompleted.completed = true;
    }
    console.log(inputsToServer)
    this.props.setInputs(inputsToServer, componentCompleted)
  }
  render() {
    const iconStyles = {
      marginRight: 10
    };
    var {firstname, lastname, company, dynamicText, dropboxFiles} = this.state;
    const dynamicInput = dynamicText.map(website => {
      return (
        <div key={website.index}>
          <div>
            <button type="button" onClick={this.removeDynamicText.bind(this, website.index)}>Remove</button>
          </div>
          <div>
            <TextField value={website.text1} onChange={this._handleDynamicChange.bind(this, [website.index, 'text1'])} floatingLabelText="Website"/>
            <br></br>
            <TextField value={website.text2} onChange={this._handleDynamicChange.bind(this, [website.index, 'text2'])} floatingLabelText="Description"/>
          </div>

        </div>
      )
    })
    console.log('dropboxfiles', dropboxFiles)

    // if(document.getElementById('file-upload').files[0]){
    //   var fileName1 = document.getElementById('file-upload').files[0]
    //   console.log(fileName1)
    // }


    const dropboxFileUploads = dropboxFiles.map(file => {
      return (
        <div key={file.id}>
          {file.name}
        </div>
      )
    })

    return (
      <main className="input-tile">
        <div >
          <div className="input-header-title">
            <FontIcon style={iconStyles} className="material-icons" color={blue500}>navigate_next</FontIcon>Customer Information
          </div>
          <TextField value={firstname} onChange={this.handleChange.bind(this, 'firstname')} floatingLabelText="First Name"/>
          <br></br>
          <TextField value={lastname} onChange={this.handleChange.bind(this, 'lastname')} floatingLabelText="Last Name"/>
          <br></br>
          <TextField value={company} onChange={this.handleChange.bind(this, 'company')} floatingLabelText="Company"/>
          <br></br>
          {dynamicInput}<button type="button" onClick={this.addInputs.bind(this)}>Add Website</button>
          <br></br>
          <br></br>
          <button type="button" onClick={this.saveInputs.bind(this)}>Save</button>
          <br></br>
          <br></br>
          DropBox Files
          {dropboxFileUploads}
          <input type="file" id="file-upload"/>

          <button type="button" onClick={this._uploadFile.bind(this)}>Submit</button>
        </div>
      </main>
    );
  }
}
function mapStateToProps(state) {
  return {inputReturnValues: state.inputDuck.inputReturnValues,
    dropboxFiles: state.uploadDuck.dropboxFiles,
    fileUploadToast: state.uploadDuck.fileUploadToast,
    fileName: state.uploadDuck.fileName};
}
export default connect(mapStateToProps, {setInputs, getInputs, uploadFile, getFiles})(TestComp2);
