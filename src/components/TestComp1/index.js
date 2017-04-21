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
                    <TextField inputStyle={false} underlineShow={false} style = {{width: 600, fontSize: 25}} hintText="Full Name" floatingLabelText=""/><br/>
                  </div>
                    <TextField style = {{width: 600, fontSize: 25}} />
                    <br></br>
                    <TextField style = {{width: 600}} floatingLabelText="Billing Address"/>
                    <br></br>
                  <span> <TextField style = {{width: 400}} floatingLabelText="City"/>
                      &nbsp;&nbsp;&nbsp;
                    <TextField style = {{width: 200}} floatingLabelText="State"/></span>

            </div>
        </main>
    );
}
