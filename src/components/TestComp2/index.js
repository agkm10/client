import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import "./billinginfo.css"
import FontIcon from 'material-ui/FontIcon';
import {blue500} from 'material-ui/styles/colors';
import {connect} from "react-redux";
import {setInputs, getInputs} from '../../ducks/inputDuck'

class TestComp2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputReturnValues: {},
      firstname: "",
      lastname: "",
      company: "",
      dynamicText: [{text1: "", text2: "", index: 0}]
    }

  }
  componentWillReceiveProps(nextProps) {
    this.setState({firstname: nextProps.inputReturnValues.data[0].firstname})
    this.setState({lastname: nextProps.inputReturnValues.data[0].lastname})
    this.setState({company: nextProps.inputReturnValues.data[0].company})
    this.setState({dynamicText: nextProps.inputReturnValues.data[0].websites})
  }
  handleChange(field, e) {
    this.setState({[field]: e.target.value})
  }
  _handleDynamicChange(field, e) {
    var newDynamicText = this.state.dynamicText.slice(0)
    newDynamicText[field[0]][field[1]] = e.target.value
    this.setState(newDynamicText)
  }
  componentDidMount(){
    this.props.getInputs()
  }
  addInputs() {
    var arrayvar = this.state.dynamicText.slice(0)
    arrayvar.push({text1: "", text2: "", index: arrayvar.length})
    this.setState({ dynamicText: arrayvar })
    console.log('arrayvar', this.state.dynamicText)
  }
  removeDynamicText(field) {
    var arrayvar2 = this.state.dynamicText.slice(0)
    console.log('arrayvar2 1', arrayvar2)
    arrayvar2.splice(field,1)
    for (let i=0; i<arrayvar2.length;++i) {
      arrayvar2[i].index = i;
    }
    this.setState({ dynamicText: arrayvar2 })
    console.log('arrayvar2', this.state.dynamicText)
  }
  saveInputs() {
    const inputsToServer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      company: this.state.company,
      websites: JSON.stringify(this.state.dynamicText)
    }
    console.log(inputsToServer)
    this.props.setInputs(inputsToServer)
  }
  render() {
    const iconStyles = {
      marginRight: 10
    };
    var {firstname, lastname, company, dynamicText} = this.state;
    console.log('dynamicText', dynamicText)
    const dynamicInput = dynamicText.map(website => {
      console.log('website', website)
      var text1, text2
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
        </div>
      </main>
    );
  }
}
function mapStateToProps(state) {
  return {inputReturnValues: state.inputDuck.inputReturnValues};
}
export default connect(mapStateToProps, {setInputs, getInputs})(TestComp2);
