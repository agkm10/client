import React, { Component } from 'react';
import { connect } from 'react-redux';
//MATERIAL UI
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import { cyan500 } from 'material-ui/styles/colors';
import SaveButton from 'material-ui/svg-icons/file/cloud-upload';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
//EXPORTED FUNCTIONS
import { getInputs, setInputs } from '../../ducks/inputDuck';
import { postSystemWatson } from '../../ducks/messageDuck';
import { updateComps } from '../../ducks/clientDuck';
//CSS
import brainIcon from '../../assets/logoquestion.svg';
import './BillInfo.css';

class BillInfo extends Component {
    constructor() {
        super()
        this.state = {
            billingpoc: "",
            billingphonenumber: "",
            billingemail: "",
            billingadd: "",
            billingcity: "",
            billingstate: "",
            billingzip: ""
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
            billingpoc: nextProps.inputReturnValues.data[ 0 ].billingpoc,
            billingphonenumber: nextProps.inputReturnValues.data[ 0 ].billingphonenumber,
            billingemail: nextProps.inputReturnValues.data[ 0 ].billingemail,
            billingadd: nextProps.inputReturnValues.data[ 0 ].billingadd,
            billingcity: nextProps.inputReturnValues.data[ 0 ].billingcity,
            billingzip: nextProps.inputReturnValues.data[ 0 ].billingzip,
            billingstate: nextProps.inputReturnValues.data[ 0 ].billingstate
        })
    }

    saveInputs( e ) {
        const inputsToServer = {
            billingpoc: this.state.billingpoc,
            billingphonenumber: this.state.billingphonenumber,
            billingemail: this.state.billingemail,
            billingcity: this.state.billingcity,
            billingadd: this.state.billingadd,
            billingzip: this.state.billingzip,
            billingstate: this.state.billingstate
        }

        let componentCompleted = {
            component: "BillInfo",
            completed: false
        }

        let completeCheck = true
        for ( let stateCheck in inputsToServer ) {
            if ( !inputsToServer[ stateCheck ] ) {
                completeCheck = false;
            }
        }

        if ( completeCheck ) {
            componentCompleted.completed = true
        }

        this.props.setInputs( inputsToServer )
        this.props.updateComps( componentCompleted )
        e.preventDefault()
    }

    submitToWatson( e ) {
      e.preventDefault()
      this.props.postSystemWatson( "billtrigger" )
    }

    render() {

        const {
            billingpoc,
            billingphonenumber,
            billingemail,
            billingadd,
            billingcity,
            billingstate,
            billingzip
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
                    <div>
                        <div className="input-header-title">Billing Information</div>
                        <div className="input-description">This is for Goldsage Billing Contact Info and Payment Processing</div>
                        <div>
                            <p className="placeholderinputs">
                                <FontIcon className="material-icons" style={ iconStyles } color={ cyan500 }>arrow_forward</FontIcon>
                                Billing Point of Contact Name
                            </p>
                            <TextField
                                id="billingPOC1"
                                value={ billingpoc }
                                onChange={ this.handleChange.bind( this, 'billingpoc' ) }
                                className="hovertexttest"
                                underlineShow={ false }
                                style={ inStyle }
                                hintText=""
                            />
                            <br/>
                        </div>
                        <div>
                            <p className="placeholderinputs">
                            <FontIcon className="material-icons" style={ iconStyles } color={ cyan500 }>arrow_forward</FontIcon>
                            Direct Phone Number
                            </p>
                            <TextField
                                id="billingphonenumber1"
                                value={ billingphonenumber }
                                onChange={ this.handleChange.bind( this, 'billingphonenumber' ) }
                                className="hovertexttest"
                                underlineShow={ false }
                                style={ inStyle }
                                hintText=""
                            />
                            <br/>
                        </div>
                        <div>
                            <p className="placeholderinputs">
                                <FontIcon className="material-icons" style={ iconStyles } color={ cyan500 }>arrow_forward</FontIcon>
                                Email
                            </p>
                            <TextField
                                id="billingemail1"
                                value={ billingemail }
                                onChange={ this.handleChange.bind( this, 'billingemail' ) }
                                className="hovertexttest"
                                underlineShow={ false }
                                style={ inStyle }
                                hintText=""
                            />
                            <br/>
                        </div>
                        <div>
                            <p className="placeholderinputs">
                                <FontIcon className="material-icons" style={ iconStyles } color={ cyan500 }>arrow_forward</FontIcon>
                                Billing Address
                            </p>
                            <TextField
                                id="billingadd1"
                                value={ billingadd }
                                onChange={ this.handleChange.bind( this, 'billingadd' ) }
                                className="hovertexttest"
                                underlineShow={ false }
                                style={ inStyle }
                                hintText=""
                            />
                            <br/>
                        </div>
                        <div>
                            <p className="placeholderinputs">
                            <FontIcon className="material-icons" style={ iconStyles } color={ cyan500 }>arrow_forward</FontIcon>
                            City
                            </p>
                            <TextField
                                id="billingcity1"
                                value={ billingcity }
                                onChange={ this.handleChange.bind( this, 'billingcity' ) }
                                className="hovertexttest"
                                underlineShow={ false }
                                style={ inStyle }
                                hintText=""
                            />
                            <br/>
                        </div>
                        <div>
                            <p className="placeholderinputs">
                                <FontIcon className="material-icons" style={ iconStyles } color={ cyan500 }>arrow_forward</FontIcon>
                                State
                            </p>
                            <TextField
                                id="billingstate1"
                                value={ billingstate }
                                onChange={ this.handleChange.bind( this, 'billingstate' ) }
                                className="hovertexttest"
                                underlineShow={ false }
                                style={ inStyle }
                                hintText=""
                            />
                            <br/>
                        </div>
                        <div>
                            <p className="placeholderinputs">
                                <FontIcon className="material-icons" style={ iconStyles } color={ cyan500 }>arrow_forward</FontIcon>
                                Zip Code
                            </p>
                            <TextField
                                id="billingzip1"
                                value={ billingzip }
                                onChange={ this.handleChange.bind( this, 'billingzip' ) }
                                className="hovertexttest"
                                underlineShow={ false }
                                style={ inStyle }
                                hintText=""
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

const mapStateToProps = state => {
    return { inputReturnValues: state.inputDuck.inputReturnValues }
}


export default connect( mapStateToProps, { setInputs, getInputs, postSystemWatson, updateComps } )( BillInfo )
