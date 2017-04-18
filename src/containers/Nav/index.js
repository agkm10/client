import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import appIconsComponent from './appIconsComponent'
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/communication/message';
import Profile from 'material-ui/svg-icons/action/account-circle';
import WatsonIcon from 'material-ui/svg-icons/action/fingerprint';
import logoiconleft from 'material-ui/svg-icons/places/hot-tub';
import goldsageLogo from "../../assets/logoforgroupapp.svg";
import "./nav.css"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey50} from 'material-ui/styles/colors';
import {login} from '../../ducks/loginDuck'
import {logout} from '../../ducks/loginDuck'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function navBarLogout() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};
const muiTheme = getMuiTheme({
  palette: {

  },
  appBar: {
    height: 60,
    color: "#7EC9B3",
  },

  badge: {
    fontWeight: 300
  }
});

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */

 let links = (
     <div>
       <IconButton tooltip="Watson chat" >
         <WatsonIcon color={grey50} />
       </IconButton>

       <Badge
      badgeContent={10}
      secondary={true}
      badgeStyle={{top: 12, right: 12}}>

      <Link to="/messages">
      <IconButton tooltip="message" >
        <NotificationsIcon color={grey50}/>
      </IconButton>
      </Link>
    </Badge>

    <Link to="/" onClick={logout}>
   <IconButton tooltip="Logout">
     <Profile color={grey50} />
   </IconButton>
 </Link>


     </div>
 )

const NavBarTop = (props) => (
<div>
  <AppBar style={{backgroundColor: '#0E4341'}}
    title={<Link to="/client"><img
						alt="javascript logo"
						className="nav-goldsage-logo"
						src={ goldsageLogo }
					/></Link>}
    // onRightIconButtonTouchTap={navBarLogout}
    // iconElementLeft={false}
    iconElementRight={links }
    showMenuIconButton={false}

  />

</div>
);

// export default NavBarTop;
function mapStateToProps(state) {
	return { isAuth: state.loginDuck.isAuth };
}
export default connect( mapStateToProps, {login, logout})( NavBarTop );
