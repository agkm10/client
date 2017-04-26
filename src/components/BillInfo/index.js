import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import "./BillInfo.css"
import FontIcon from 'material-ui/FontIcon';
import {cyan500} from 'material-ui/styles/colors';
import SaveButton from 'material-ui/svg-icons/file/cloud-upload';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';


class BillInfo extends Component {
  constructor(){
    super();
    this.state = {
      inputReturnValues: {},
      billingpoc: "",
      billingphonenumber: "",
      billingemail: "",
      billingadd: "",
      billingcity: "",
      billingstate: "",
      billingzip: ""

    }

  }

  handleChange(field, e) {
    this.setState({[field]: e.target.value})
  }
  componentDidMount() {
    this.props.getInputs()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({billingpoc: nextProps.inputReturnValues.data[0].billingpoc})
    this.setState({billingphonenumber: nextProps.inputReturnValues.data[0].billingphonenumber})
    this.setState({billingemail: nextProps.inputReturnValues.data[0].billingemail})
    this.setState({billingadd: nextProps.inputReturnValues.data[0].billingadd})
    this.setState({billingcity: nextProps.inputReturnValues.data[0].billingstate})
    this.setState({billingzip: nextProps.inputReturnValues.data[0].billingzip})

  }
  saveInputs(e) {
    const inputsToServer = {
      billingpoc: this.state.billingpoc,
      billingphonenumber: this.state.billingphonenumber,
      billingemail: this.state.billingemail,
      billingcity: this.state.billingcity,
      billingadd: this.state.billingadd,
      billingzip: this.state.billingzip

    }
    this.props.setInputs(inputsToServer)
    e.preventDefault()
  }
  render(){
    console.log('bill info rendered')
    var {billingpoc,
        billingphonenumber,
        billingemail,
        billingadd,
        billingcity,
        billingstate,
        billingzip} = this.state;

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
         <TextField id="billingPOC1" value={billingpoc} onChange={this.handleChange.bind(this, 'billingpoc')} className="hovertexttest" underlineShow={false} style={inStyle} hintText="" /><br/>
      </div>
      <div>
         <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Direct Phone Number</p>
         <TextField id="billingphonenumber1" value={billingphonenumber} onChange={this.handleChange.bind(this, 'billingphonenumber')} className="hovertexttest" underlineShow={false} style={inStyle} hintText="" /><br/>
      </div>
      <div>
         <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Email</p>
         <TextField id="billingemail1" value={billingemail} onChange={this.handleChange.bind(this, 'billingemail')}  className="hovertexttest" underlineShow={false} style={inStyle} hintText="" /><br/>
      </div>
      <div>
         <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Billing Address</p>
         <TextField id="billingadd1" value={billingadd} onChange={this.handleChange.bind(this, 'billingadd')} className="hovertexttest"  underlineShow={false} style={inStyle} hintText="" /><br/>
       </div>
       <div>
          <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>City</p>
          <TextField id="billingcity1" value={billingcity} onChange={this.handleChange.bind(this, 'billingcity')} className="hovertexttest"  underlineShow={false} style={inStyle} hintText="" /><br/>
        </div>
        <div>
           <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>State</p>
           <TextField id="billingstate1" value={billingstate} onChange={this.handleChange.bind(this, 'billingstate')} className="hovertexttest"  underlineShow={false} style={inStyle} hintText="" /><br/>
         </div>
         <div>
            <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Zip Code</p>
            <TextField id="billingzip1" value={billingzip} onChange={this.handleChange.bind(this, 'billingzip')} className="hovertexttest"  underlineShow={false} style={inStyle} hintText="" /><br/>

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
  return {inputReturnValues: state.inputDuck.inputReturnValues}
}

export default connect(mapStateToProps, {setInputs, getInputs})(BillInfo);
