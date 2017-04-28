import React from "react";
import { connect } from "react-redux";
//COMPONENTS
import InputTile from '../../components/InputTile/index';
import NavBarTop from '../../components/Nav/index';
import StatusBar from '../../components/StatusBar/index';
//CSS
import "./Client.css";

export function Client( props ) {

    return (
        <main className="landing">
            <div>
                <NavBarTop/>
                <InputTile/>
                <StatusBar/>
            </div>
        </main>
    );
}

function mapStateToProps( state ) {
  return { isAuth: state.authDuck.isAuthenticated }
}

export default connect( mapStateToProps, {} )( Client );
