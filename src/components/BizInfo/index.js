import React, {Component} from "react";
import {connect} from "react-redux";
import {setInputs, getInputs} from '../../ducks/inputDuck'
import TextField from 'material-ui/TextField';
import "./BizInfo.css"
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, cyan500} from 'material-ui/styles/colors';
import SaveButton from 'material-ui/svg-icons/file/cloud-upload';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class BizInfo extends Component {
  constructor(){
    super();
    this.state = {
      inputReturnValues: {},
      businessname: "",
      businessadd: "",
      businesscity: "",
      businessstate: "",
      businessemail: "",
    }
  }
  handleChange(field, e) {
    this.setState({[field]: e.target.value})
  }
  componentDidMount() {
    this.props.getInputs()
    this.props.getFiles()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({businessname: nextProps.inputReturnValues.data[0].businessname})
    this.setState({businessadd: nextProps.inputReturnValues.data[0].businessadd})
    this.setState({businesscity: nextProps.inputReturnValues.data[0].businesscity})
    this.setState({businessstate: nextProps.inputReturnValues.data[0].businessstate})
    this.setState({businessemail: nextProps.inputReturnValues.data[0].businessemail})

  }
  saveInputs(e) {
    const inputsToServer = {
      businessname: this.state.businessname,
      businessadd: this.state.businessadd,
      businesscity: this.state.businesscity,
      businessstate: this.state.businessstate,
      businessemail: this.state.businessemail,

    }
    this.props.setInputs(inputsToServer)
    e.preventDefault()
  }
  render(){

    var {businessname,
        businessadd,
        businesscity,
        businessstate,
        billingcity,
        businessemail} = this.state;

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
         <TextField value={businessname} onChange={this.handleChange.bind(this, 'businessname')} className="hovertexttest" inputStyle={{textColor: red500}} underlineShow={false} style={inStyle} hintText="" /><br/>
      </div>
      <div>
         <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Business Address</p>

         <TextField value={businessadd} onChange={this.handleChange.bind(this, 'businessadd')} className="hovertexttest" inputStyle={false}  underlineShow={false} style={inStyle} hintText="" /><br/>
       </div>
       <div>
          <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>City</p>
          <TextField value={businesscity} onChange={this.handleChange.bind(this, 'businesscity')} className="hovertexttest" inputStyle={false}  underlineShow={false} style={inStyle} hintText="" /><br/>
        </div>
        <div>
           <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>State</p>
           <TextField value={businessstate} onChange={this.handleChange.bind(this, 'businessstate')} className="hovertexttest" inputStyle={false}  underlineShow={false} style={inStyle} hintText="" /><br/>
         </div>
         <div>
            <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Contact Form Email Address</p>
            <TextField value={businessemail} onChange={this.handleChange.bind(this, 'businessemail')} className="hovertexttest" inputStyle={false}  underlineShow={false} style={inStyle} hintText="" /><br/>
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
              onClick={this.saveInputs.bind(this)}
            ></RaisedButton>

          </div>


    </div>
  </Paper>
  </main>
  )

  }
}
function mapStateToProps(state) {
  return {inputReturnValues: state.inputDuck.inputReturnValues}}
export default connect(mapStateToProps, {setInputs, getInputs})(BizInfo);
