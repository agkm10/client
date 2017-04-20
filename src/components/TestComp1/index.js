import React from "react";
import TextField from 'material-ui/TextField';
import "./billinginfo.css"
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

export default function TestComp1() {

  const iconStyles = {
  marginRight: 10,
};

    return (
        <main className="input-tile">
            <div >
                <div className="input-header-title">
									  <FontIcon className="material-icons" color={blue500}style={iconStyles}>navigate_next</FontIcon>Billing Information
								</div>
                  <div>
                    <h3>Full Text</h3>
                    <TextField inputStyle={false} hintText="Full Name" floatingLabelText=""/><br/>
                  </div>
                    <TextField floatingLabelText="Phone Number"/>
                    <br></br>
                    <TextField floatingLabelText="Billing Address"/>
                    <br></br>
                    <TextField floatingLabelText="City"/>
                      <br></br>
                    <TextField floatingLabelText="State"/>

            </div>
        </main>
    );
}
