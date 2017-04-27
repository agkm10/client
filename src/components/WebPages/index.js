import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import "./WebPages.css"
import FontIcon from 'material-ui/FontIcon';
import {red500, cyan500, grey400} from 'material-ui/styles/colors';
import SaveButton from 'material-ui/svg-icons/file/cloud-upload';
import AddButton from 'material-ui/svg-icons/action/note-add';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {connect} from "react-redux";
import {setInputs, getInputs} from '../../ducks/inputDuck'
import {updateComps} from '../../ducks/clientDuck'

class WebPages extends Component {
  constructor() {
    super();
    this.state = {
      dynamicText: [
        {
          text1: "",
          text2: "",
          index: 0
        }
      ]
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      dynamicText: nextProps.dynamicText,
    })
  }
  addInputs() {
    var arrayvar = this.state.dynamicText.slice(0)
    arrayvar.push({text1: "", text2: "", index: arrayvar.length})
    this.setState({dynamicText: arrayvar})
  }
  _handleDynamicChange(field, e) {
    var newDynamicText = this.state.dynamicText.slice(0)
    newDynamicText[field[0]][field[1]] = e.target.value
    this.setState({dynamicText: newDynamicText})
    console.log('dynamicchange', this.state.dynamicText)
  }
  removeDynamicText(field) {
    var arrayvar2 = this.state.dynamicText.slice(0)
    arrayvar2.splice(field, 1)
    for (let i = 0; i < arrayvar2.length; ++i) {
      arrayvar2[i].index = i;
    }
    this.setState({dynamicText: arrayvar2})
  }
  saveInputs(e) {
    var componentCompleted = {
      component: "WebPages",
      completed: false
    }
    const inputsToServer = {
      websites: JSON.stringify(this.state.dynamicText)
    }
    console.log('inputs to server', inputsToServer)
    // const inputsToServer = {
    //   firstname: this.state.firstname,
    //   lastname: this.state.lastname,
    //   company: this.state.company,
    //   websites: JSON.stringify(this.state.dynamicText)
    // }
    var completeCheck = true;
    for (var stateCheck in inputsToServer) {
      if (!inputsToServer[stateCheck]) {
        completeCheck = false;
      }
    }
    if (completeCheck) {
      componentCompleted.completed = true;
    }
    console.log('componentCompleted', componentCompleted)
    this.props.setInputs(inputsToServer)
    this.props.updateComps(componentCompleted)
    e.preventDefault()
  }


  render() {
    // console.log('websites rendered')
    const iconStyles = {
      marginRight: 10,
      fontSize: 14
    }
    const inStyle = {
      width: '90%',
      fontSize: 25,
      fontWeight: 300
    }
    const styles = {
      button: {
        margin: 20,
        fontWeight: 100
      }
    }
    const pstyle = {
      padding: 40,
      width: 600
    }
    var {dynamicText} = this.state;
    var dynamicInput;
    if (dynamicText) {
      dynamicInput = dynamicText.map(website => {
        return (
          <div key={website.index}>
            <div className="flex-delete-div">
              <div className="placeholderinputs left-flex-delete">
                <FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Page Title
              </div>
              <div id="delete-page" onClick={this.removeDynamicText.bind(this, website.index)}>
                <FontIcon className="material-icons" style={iconStyles} color={grey400} hoverColor={red500}>delete_forever</FontIcon>delete page</div>
            </div>
            <TextField
              value={website.text1}
              onChange={this._handleDynamicChange.bind(this, [website.index, 'text1'])}
              id={"text1-"+website.index}
              className="hovertexttest"
              underlineShow={false}
              style={inStyle}
              hintText=""
            />
            <div>
              <p className="placeholderinputs">
                <FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Page Content</p>
              <TextField
                value={website.text2}
                onChange={this._handleDynamicChange.bind(this, [website.index, 'text2'])}
                id={"text2-"+website.index}
                className="hovertexttest"
                underlineShow={false}
                style={inStyle}
                hintText=""
                multiLine={true}
                rows={4}
              /><br/>
            </div>
            {/* <div>
              <button type="button" onClick={this.removeDynamicText.bind(this, website.index)}>Remove</button>
            </div>
            <div>
              <TextField value={website.text1} onChange={this._handleDynamicChange.bind(this, [website.index, 'text1'])} floatingLabelText="Website"/>
              <br></br>
              <TextField value={website.text2} onChange={this._handleDynamicChange.bind(this, [website.index, 'text2'])} floatingLabelText="Description"/>
            </div> */}

          </div>
        )
      })
    } else {
      dynamicInput = <div></div>
    }
    return (
      <main className="input-tile">
        <Paper style={pstyle} zDepth={1}>
          <div >
            <div className="input-header-title">Website Pages Content</div>
            <div className="input-description">Enter your Page Title & Text Content for that Page. Add as many pages as you need.</div>
            {dynamicInput}
            <div>
              <RaisedButton
                label="ADD NEW PAGE"
                labelPosition="before"
                icon={< AddButton />}
                style={styles.button}
                onClick={this.addInputs.bind(this)}
                backgroundColor="#1C333D"
                labelColor="#FFFFFF"
                buttonStyle={{fontWeight: 100}}
              />
            </div>
            <div className="save-button-inputs">
              <RaisedButton
                href="#fileup"
                label="SAVE"
                labelPosition="before"
                icon={< SaveButton />}
                onClick={this.saveInputs.bind(this)}
                style={styles.button}
                backgroundColor="#AE863C"
                labelColor="#FFFFFF"
                buttonStyle={{fontWeight: 100}}
              />
            </div>
          </div>
        </Paper>
      </main>
    )

  }

}
function mapStateToProps(state) {
  return {
    dynamicText: state.inputDuck.dynamicText
  }
}
export default connect(mapStateToProps, {setInputs, getInputs, updateComps})(WebPages);
