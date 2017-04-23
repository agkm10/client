import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import "./SideStatusBar.css"
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, cyan500, grey400} from 'material-ui/styles/colors';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import IconComplete from 'material-ui/svg-icons/navigation/check';
import IconNotComplete from 'material-ui/svg-icons/content/clear';
import {connect} from "react-redux";
import {setInputs, getInputs} from '../../ducks/inputDuck'
import {uploadFile, getFiles} from '../../ducks/uploadDuck'


class SideStatusBar extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    const iconStyles = {
    marginRight: 10,
    fontSize: 14,
  }
  const inStyle = {
    width: '90%',
    fontSize: 25,
    fontWeight: 300,
  }
  const styles = {
  button: {
    margin: 20,
    fontWeight: 100,
  }
}
const pstyle = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
}

  return(
  <main className="side-bar-container">
    <Paper style={pstyle.paper} zDepth={1}>
    <div >
      <Menu>
         <MenuItem primaryText="Business Info" leftIcon={<IconComplete />} />
          <Divider />
         <MenuItem primaryText="Design" leftIcon={<IconComplete />} />
          <Divider />
         <MenuItem primaryText="Social Media" leftIcon={<IconComplete />} />
         <Divider />
         <MenuItem primaryText="Web Pages" leftIcon={<IconComplete />} />
          <Divider />
         <MenuItem primaryText="Logo Upload" leftIcon={<IconComplete />} />
         <Divider />
         <MenuItem primaryText="Billing Info" leftIcon={<IconComplete />} />
       </Menu>

    </div>
  </Paper>
  </main>
  )

  }
}
function mapStateToProps(state) {
  return {inputReturnValues: state.inputDuck.inputReturnValues, dropboxFiles: state.uploadDuck.dropboxFiles};
}
export default connect(mapStateToProps, {setInputs, getInputs, uploadFile, getFiles})(SideStatusBar);
