import React, {Component} from "react";
import {getComps} from '../../ducks/clientDuck'
import {connect} from "react-redux";
import TestComp1 from '../TestComp1/index'
import TestComp2 from '../TestComp2/index'
import TestComp3 from '../TestComp3/index'
import TestComp4 from '../TestComp4/index'
import "./statusbar.css"
import IconButton from 'material-ui/IconButton';
import IconComplete from 'material-ui/svg-icons/navigation/check';
import IconNotComplete from 'material-ui/svg-icons/content/clear';
import {grey50} from 'material-ui/styles/colors';
import LinearProgress from 'material-ui/LinearProgress';

class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentTypes: [
        {component: < TestComp1 />, name: 'TestComp1'},
        {component: < TestComp2 />, name: 'TestComp2'},
        {component: < TestComp3 />, name: 'TestComp3'},
        {component: < TestComp4 />, name: 'TestComp4'},
      ]

    }
  }
  componentDidMount() {
    this.props.getComps()
  }
  render() {
    const {varComponentTypes} = this.props;
    const {componentTypes} = this.state
    var compCount = 0;
    var compCount1 = 0;
    const componentMap = componentTypes.map((type, index) => {
      var check = false
      var check2 = false;
      for (var comp in varComponentTypes.data) {
        if (varComponentTypes.data[comp].compName === type.name) {
          check = true;
          compCount1 += 1;
          type.statusName = varComponentTypes.data[comp].statusName
          type.key = varComponentTypes.data[comp].id
          if (varComponentTypes.data[comp].completed === true) {
            compCount += 1;
            check2 = true;
          }
        }
      }
      if (check && check2) {
        return <div key={type.key} className='status-point sPComplete'>
          <IconButton tooltip={type.statusName} tooltipPosition="top-center">
            <IconComplete color={grey50}/>
          </IconButton>
        </div>
      } else if (check) {
        return <div key={type.key} className='status-point sPIncomplete'>
          <IconButton tooltip={type.statusName} tooltipPosition="top-center">
            <IconNotComplete color={grey50}/>
          </IconButton>
        </div>
      }
    })
    var percentCompleted = Math.floor((compCount / compCount1) * 100);

    return (
      <main className="status-bar-landing">
        <div className="status-bar-left">
          {componentMap}
        </div>
        <div className="status-bar-right">
          <div className="percenttext">{percentCompleted}% Complete</div>
          <LinearProgress mode="determinate" value={percentCompleted}/>

        </div>
      </main>
    );
  }
}
function mapStateToProps(state) {
  return {varComponentTypes: state.clientDuck.varComponentTypes};
}
export default connect(mapStateToProps, {getComps})(StatusBar);
