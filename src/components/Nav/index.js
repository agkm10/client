import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//EXPORTED FUNCTIONS
import { logout } from '../../ducks/authDuck';
//MATERIAL UI
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import FlatButton from 'material-ui/FlatButton';
import NotificationsIcon from 'material-ui/svg-icons/communication/message';
import WatsonIcon from 'material-ui/svg-icons/action/fingerprint';
import { grey50 } from 'material-ui/styles/colors';
//CSS
import goldsageLogo from '../../assets/logoforgroupapp.svg';
import './nav.css';

class NavBarTop extends Component {
    constructor() {
        super()

        this.handleClick = this.handleClick.bind( this )
    }

    handleClick( e ) {
        this.props.logout()
        e.preventDefault()
    }

    componentDidMount() {
        const badge = ReactDOM.findDOMNode( this.refs.badge )
        badge.style.paddingRight = '12px'
    }

    render() {
        const {
            count_messages
        }
        = this.props

        const badgeCount = () =>{
            return count_messages[0]
        }

        const badgeStyle = ()=>{
            return ( count_messages[0] )
            ?{ top: 12, right: 6 }
            :{ top: 24, right: 24,display:'none' }
        }

        return (
            <Toolbar style={ { backgroundColor: '#0E4341', height: 80 } }>
                <ToolbarGroup firstChild={ true }>
                    <Link to="/client">
                        <img alt="javascript logo" className="nav-goldsage-logo" src={ goldsageLogo }/>
                    </Link>
                </ToolbarGroup>
                <ToolbarGroup>
                    <Badge
                        ref="badge"
                        badgeContent={ badgeCount() }
                        secondary={ true }
                        badgeStyle={ badgeStyle() }>
                        <Link to="/messages">
                            <IconButton tooltip="message">
                                <NotificationsIcon color={ grey50 }/>
                            </IconButton>
                        </Link>
                    </Badge>
                    <Link to="/" onClick={ this.handleClick }>
                        <FlatButton
                            label="LOGOUT"
                            primary={ true }
                            labelStyle={ { grey50 } }
                            style={ { color: grey50 } }
                        />
                    </Link>
                </ToolbarGroup>
            </Toolbar>
        )
    }
}

const mapStateToProps = state => {
    return {
        count_messages: state.messageDuck.count_messages
    }
}

export default connect( mapStateToProps, { logout } )( NavBarTop )
