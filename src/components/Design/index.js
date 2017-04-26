import React, {Component} from "react";
import {connect} from "react-redux";
import {setInputs, getInputs} from '../../ducks/inputDuck'
import TextField from 'material-ui/TextField';
import "./Design.css"
import FontIcon from 'material-ui/FontIcon';
import {cyan500} from 'material-ui/styles/colors';
import SaveButton from 'material-ui/svg-icons/file/cloud-upload';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Design extends Component {
  constructor(){
    super();
    this.state = {
      inputReturnValues: {},
      designwho: "Kurt",
      designaction: "McGallion",
      designurl: "kurtmcgallion.com",
    }
  }
  handleChange(field, e) {
    this.setState({[field]: e.target.value})
  }
  componentDidMount() {
    this.props.getInputs()
  }
  componentWillReceiveProps(nextProps) {
    // this.setState({designwho: nextProps.inputReturnValues.data[0].designwho})
    // this.setState({designaction: nextProps.inputReturnValues.data[0].designaction})
    // this.setState({designurl: nextProps.inputReturnValues.data[0].designurl})
  }
  saveInputs(e) {
    const inputsToServer = {
      designwho: this.state.designwho,
      designaction: this.state.designaction,
      designurl: this.state.designurl,

    }
    this.props.setInputs(inputsToServer)
    e.preventDefault()
  }

  render(){
    console.log('design rendered')
    var {designwho,
        designaction,
        designurl} = this.state;

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

  return(
  <main className="input-tile">
    <Paper style={pstyle} zDepth={1}>
    <div >
      <div className="input-header-title">Design</div>
      <div className="input-description">These questions are designed to help us with our design and build process.</div>

      <div>
        <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500} >arrow_forward</FontIcon>Who is visiting your site? Be specific as to what type of person or customer is visiting your site.</p>
        <TextField
          id="design"
          value={designwho}
          onChange={this.handleChange.bind(this, 'designwho')}
          className="hovertexttest"

          underlineShow={false}
          style={inStyle}
          multiLine={true}
          rows={3}
        /><br/>
      </div>
      <div>
        <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500} >arrow_forward</FontIcon>What do you want them to do when they come to your site? What ACTION? </p>
        <TextField
          value={designaction}
          onChange={this.handleChange.bind(this, 'designaction')}
          className="hovertexttest"
          id="design2"
          underlineShow={false}
          style={inStyle}
          multiLine={true}
          rows={3}
        /><br/>
      </div>
      <div>
        <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500} >arrow_forward</FontIcon>List of any Example Websites you like? Enter URL below.</p>
        <TextField
          value={designurl}
          onChange={this.handleChange.bind(this, 'designurl')}
          className="hovertexttest"
          id="design3"
          underlineShow={false}
          style={inStyle}
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
export default connect(mapStateToProps, {setInputs, getInputs})(Design);
