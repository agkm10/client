import React from "react";
import {connect} from "react-redux";
import InputTile from '../../components/InputTile/index'
import "./Client.scss";
import {login} from '../../ducks/loginDuck'
import {logout} from '../../ducks/loginDuck'
import NavBarTop from '../../components/Nav/index'
import WatsonChat from '../../components/WatsonChat/index'
import BillInfo from '../../components/BillInfo/index'
import BizInfo from '../../components/BizInfo/index'
import Social from '../../components/Social/index'
import WebPages from '../../components/WebPages/index'
import Design from '../../components/Design/index'

import StatusBar from '../../components/StatusBar/index';


export function Client(props) {

  function checkAuth() {
    // if (props.isAuth) {
    return (
      <div>

        <NavBarTop/>

        <WatsonChat/>
        <InputTile/>
        <BillInfo/>
        <BizInfo/>
        <Social/>
        <WebPages/>
        <Design/>

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
  return {isAuth: state.authDuck.isAuthenticated};
}
export default connect(mapStateToProps, {login, logout})(Client);
