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
      company: ""

    }

  }
  componentDidMount() {
    this.props.getInputs()

  }
  handleChange(field, e) {
    this.setState({[field]: e.target.value})
    // console.log(this.state[field])

  }
  saveInputs() {
    const inputsToServer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      company: this.state.company
    }
    this.props.setInputs(inputsToServer)
  }
  render() {
    const iconStyles = {
      marginRight: 10
    };
    var {firstname, lastname, company} = this.state;
    const {inputReturnValues} = this.props

    // console.log(inputReturnValues)
    // firstname = inputReturnValues.data[0].firstname

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
