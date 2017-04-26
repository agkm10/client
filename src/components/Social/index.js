import React, {Component} from "react";
import {connect} from "react-redux";
import {setInputs, getInputs} from '../../ducks/inputDuck'
import TextField from 'material-ui/TextField';
import "./Social.css"
import FontIcon from 'material-ui/FontIcon';
import {red500, cyan500} from 'material-ui/styles/colors';
import SaveButton from 'material-ui/svg-icons/file/cloud-upload';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class SocialInputs extends Component {
  constructor(){
    super();
    this.state = {
      inputReturnValues: {},
      socialfacebook: "",
      socialinstagram: "",
      socialtwitter: "",
      socialyoutube: "",
      sociallinkedin: "",
      socialpinterest: "",
      socialother: "",
    }
  }

    handleChange(field, e) {
      this.setState({[field]: e.target.value})
    }

    componentDidMount() {
      this.props.getInputs()

    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.inputReturnValues.data[0]){
      this.setState({socialfacebook: nextProps.inputReturnValues.data[0].socialfacebook})
      this.setState({socialinstagram: nextProps.inputReturnValues.data[0].socialinstagram})
      this.setState({socialtwitter: nextProps.inputReturnValues.data[0].socialtwitter})
      this.setState({socialyoutube: nextProps.inputReturnValues.data[0].socialyoutube})
      this.setState({sociallinkedin: nextProps.inputReturnValues.data[0].sociallinkedin})
      this.setState({socialpinterest: nextProps.inputReturnValues.data[0].socialpinterest})
      this.setState({socialother: nextProps.inputReturnValues.data[0].socialother})
    }
    }

    saveInputs(e) {
      const inputsToServer = {
        socialinstagram: this.state.socialinstagram,
        socialtwitter: this.state.socialtwitter,
        socialyoutube: this.state.socialyoutube,
        sociallinkedin: this.state.sociallinkedin,
        socialpinterest: this.state.socialpinterest,
        socialother: this.state.socialother,
      }

      this.props.setInputs(inputsToServer)
      e.preventDefault()
    }


  render(){
    console.log('social rendered')
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
      <div className="input-header-title">Social Media Links</div>
      <div className="input-description">Find your social network links and copy and paste them below.</div>
      <div>
         <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Facebook Link</p>
         <TextField id="facebooklink" className="hovertexttest" inputStyle={{textColor: red500}} underlineShow={false} style={inStyle} hintText="" /><br/>
      </div>
      <div>
         <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Instagram</p>

         <TextField id="instagram" className="hovertexttest" underlineShow={false} style={inStyle} hintText="" /><br/>
       </div>
       <div>
          <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Twitter</p>
          <TextField id="twitter" className="hovertexttest"  underlineShow={false} style={inStyle} hintText="" /><br/>
        </div>
        <div>
           <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Youtube</p>
           <TextField id="youtube" className="hovertexttest" underlineShow={false} style={inStyle} hintText="" /><br/>
         </div>
         <div>
            <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Linkedin</p>
            <TextField id="linked" className="hovertexttest" underlineShow={false} style={inStyle} hintText="" /><br/>
          </div>
          <div>
             <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Pinterest</p>
             <TextField id="pinterest" className="hovertexttest" underlineShow={false} style={inStyle} hintText="" /><br/>
           </div>
         <div>
            <p className="placeholderinputs"><FontIcon className="material-icons" style={iconStyles} color={cyan500}>arrow_forward</FontIcon>Other Link</p>
            <TextField id="otherLink" className="hovertexttest" underlineShow={false} style={inStyle} hintText="" /><br/>
          </div>
          <div className="save-button-inputs">
            <RaisedButton
              label="SAVE"
              labelPosition="before"
              icon={<SaveButton />}
              style={styles.button}
              backgroundColor="#AE863C"
              labelColor="white"
              buttonStyle={{fontWeight: 100}}
              onClick={this.saveInputs.bind(this)}
            />
          </div>

    </div>
  </Paper>
  </main>
  )

  }
}
function mapStateToProps(state) {
  return {inputReturnValues: state.inputDuck.inputReturnValues}}
export default connect(mapStateToProps, {setInputs, getInputs})(SocialInputs);
