import React, { Component  } from 'react';
import { connect } from 'react-redux';
//MATERIAL UI
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import { cyan500 } from 'material-ui/styles/colors';
import SaveButton from 'material-ui/svg-icons/file/cloud-upload';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
//EXPORTED FUNCTIONS
import { postSystemWatson } from '../../ducks/messageDuck';
import { setInputs, getInputs } from '../../ducks/inputDuck';
import { updateComps } from '../../ducks/clientDuck';
//CSS
import './BizInfo.css';
import brainIcon from '../../assets/logoquestion.svg';


class BizInfo extends Component {
    constructor() {
        super()

        this.state = {
            businessname: "",
            businessadd: "",
            businesscity: "",
            businessstate: "",
            businessemail: ""
        }
    }

    handleChange( field, e ) {
        this.setState( { [ field ] : e.target.value } )
    }
    componentDidMount() {
        this.props.getInputs()
    }
    componentWillReceiveProps( nextProps ) {
        this.setState( {
            businessname: nextProps.inputReturnValues.data[ 0 ].businessname,
            businessadd: nextProps.inputReturnValues.data[ 0 ].businessadd,
            businesscity: nextProps.inputReturnValues.data[ 0 ].businesscity,
            businessstate: nextProps.inputReturnValues.data[ 0 ].businessstate,
            businessemail: nextProps.inputReturnValues.data[ 0 ].businessemail
        } )
    }

    saveInputs( e ) {
        let componentCompleted = {
            component: "BizInfo",
            completed: false
        }
        const inputsToServer = {
            businessname: this.state.businessname,
            businessadd: this.state.businessadd,
            businesscity: this.state.businesscity,
            businessstate: this.state.businessstate,
            businessemail: this.state.businessemail
        }

        let completeCheck = true;
        for ( let stateCheck in inputsToServer ) {
            if ( !inputsToServer[ stateCheck ] ) {
                completeCheck = false;
            }
        }
        if ( completeCheck ) {
            componentCompleted.completed = true;
        }

        this.props.setInputs( inputsToServer )
        this.props.updateComps( componentCompleted )
        e.preventDefault()
    }
    submitToWatson( e ) {
      e.preventDefault()
      this.props.postSystemWatson( "businessinfotrigger" )
    }

    render() {

        const {
            businessname,
            businessadd,
            businesscity,
            businessstate,
            businessemail
        } = this.state;

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

        return (

            <main className="input-tile">
                <Paper style={ pstyle } zDepth={ 1 }>
                  <div className="brain-icon-container">
                      <button onClick={ this.submitToWatson.bind( this ) }>
                          <img src={ brainIcon } className="brain-icon"/>
                      </button>
                  </div>
                    <div >
                        <div className="input-header-title">General Business Info</div>
                        <div className="input-description">Provide your business information for website.</div>
                        <div>
                            <p className="placeholderinputs">
                                <FontIcon className="material-icons" style={ iconStyles } color={ cyan500 }>arrow_forward</FontIcon>
                                Business Name
                            </p>
                            <TextField
                                id="businessname"
                                value={ businessname }
                                onChange={ this.handleChange.bind( this, 'businessname' ) }
                                className="hovertexttest"
                                underlineShow={ false }
                                style={ inStyle }
                            />
                            <br/>
                        </div>
                        <div>
                            <p className="placeholderinputs">
                                <FontIcon className="material-icons" style={ iconStyles } color={ cyan500 }>arrow_forward</FontIcon>
                                Business Address
                            </p>
                            <TextField
                                id="businessadd"
                                value={ businessadd }
                                onChange={ this.handleChange.bind( this, 'businessadd' ) }
                                className="hovertexttest"
                                underlineShow={ false }
                                style={ inStyle }
                            />
                            <br/>
                        </div>
                        <div>
                            <p className="placeholderinputs">
                                <FontIcon className="material-icons" style={ iconStyles } color={ cyan500 }>arrow_forward</FontIcon>
                                City
                            </p>
                            <TextField
                                id="businesscity"
                                value={ businesscity }
                                onChange={ this.handleChange.bind( this, 'businesscity' ) }
                                className="hovertexttest"
                                underlineShow={ false }
                                style={ inStyle }
                            />
                            <br/>
                        </div>
                        <div>
                            <p className="placeholderinputs">
                                <FontIcon className="material-icons" style={ iconStyles } color={ cyan500 }>arrow_forward</FontIcon>
                                State
                            </p>
                            <TextField
                                id="businessstate"
                                value={ businessstate }
                                onChange={ this.handleChange.bind( this, 'businessstate' ) }
                                className="hovertexttest"
                                underlineShow={ false }
                                style={ inStyle }
                            />
                            <br/>
                        </div>
                        <div>
                            <p className="placeholderinputs">
                                <FontIcon className="material-icons" style={ iconStyles } color={ cyan500 }>arrow_forward</FontIcon>
                                Contact Form Email Address
                            </p>
                            <TextField
                                id="businessemail"
                                value={ businessemail }
                                onChange={ this.handleChange.bind( this, 'businessemail' ) }
                                className="hovertexttest"
                                underlineShow={ false }
                                style={ inStyle }
                            />
                            <br/>
                        </div>
                        <div className="save-button-inputs">
                            <RaisedButton
                                href="#fileup"
                                label="SAVE"
                                labelPosition="before"
                                icon={ < SaveButton /> }
                                style={ styles.button }
                                backgroundColor="#AE863C"
                                labelColor="#FFFFFF"
                                buttonStyle={ { fontWeight: 100 } }
                                onClick={ this.saveInputs.bind( this ) }
                            ></RaisedButton>
                        </div>
                    </div>
                </Paper>
            </main>
        )
    }
 }

const mapStateToProps= state => {
    return { inputReturnValues: state.inputDuck.inputReturnValues }
}

export default connect( mapStateToProps, { setInputs, getInputs, postSystemWatson, updateComps } )( BizInfo )
