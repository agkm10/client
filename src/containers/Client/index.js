import React from "react";
import {connect} from "react-redux";
import InputTile from '../../components/InputTile/index'
import "./Client.scss";
import {login} from '../../ducks/loginDuck'
import {logout} from '../../ducks/loginDuck'
import NavBarTop from '../Nav/index'
import StatusBar from '../../components/StatusBar/index'
import SocialInputs from '../../components/Social/index'
import TestComp1 from '../../components/TestComp1/index'
import LogoUpload from '../../components/Logo/index'
import BizInfo from '../../components/BizInfo/index'
import BillInfo from '../../components/BillInfo/index'
import WebPages from '../../components/WebPages/index'

export function Client(props) {

  function checkAuth() {
    // if (props.isAuth) {
    return (
      <div>

        <NavBarTop/>

        <InputTile/>
        <BillInfo/>
        <BizInfo/>
        <SocialInputs/>
        <LogoUpload/>
        <WebPages/>

        <StatusBar/>
      </div>
    );
    // } else {
    // 		return <h3>You are not logged in</h3>
    // }
  }

  return (
    <main className="landing">
      {checkAuth()}
    </main>
  );
}

function mapStateToProps(state) {
  return {isAuth: state.loginDuck.isAuth};
}
export default connect(mapStateToProps, {login, logout})(Client);
