import React from "react";
import TextField from 'material-ui/TextField';


export default function TestComp1() {

	return (
		<main className="input-tile">
			<div>
		 	<TextField
		 	hintText="Full Name"
		 	floatingLabelText="Goldsage Point of Contact Name"
		/><br></br>
		<TextField
	 hintText="Phone Number"
	 floatingLabelText="Phone Number"
 /><br></br>
		<TextField
	 hintText="123 oak st...."
	 floatingLabelText="Billing Address"
	/><br></br>
	<TextField
 hintText="City"
 floatingLabelText="City"
/>
<TextField
hintText="State"
floatingLabelText="State"
/>
			</div>
		</main>
	);
}
