import React, {Component} from "react";
import "./inputTile.css";
import {getComps} from '../../ducks/clientDuck'
import {connect} from "react-redux";
import SocialInputs from '../Social/index'
import TestComp1 from '../TestComp1/index'
import TestComp2 from '../TestComp2/index'
import LogoUpload from '../Logo/index'
import BizInfo from '../BizInfo/index'
import BillInfo from '../BillInfo/index'
import WebPages from '../WebPages/index'
import Design from '../Design/index'

class InputTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentTypes: [
        {component: < TestComp1 />, name: 'TestComp1'},
        {component: < TestComp2 />, name: 'TestComp2'},
        {component: < SocialInputs />, name: 'SocialInputs'},
        {component: < LogoUpload />, name: 'LogoUpload'},
        {component: < BizInfo />, name: 'BizInfo'},
        {component: < BillInfo />, name: 'BillInfo'},
        {component: < WebPages />, name: 'WebPages'},
        {component: < Design />, name: 'Design'}
      ]
    }

  }
  componentDidMount() {
      this.props.getComps()

  }
  componentWillReceiveProps(nextProps) {

  }
  render() {
    // console.log(this.props)
    const {varComponentTypes} = this.props;
    const {componentTypes} = this.state
    // console.log('varcomptypes', varComponentTypes)
    const componentMap = componentTypes.filter((type, index) => {
      var check = false
      for (var comp in varComponentTypes.data) {
        if ((varComponentTypes.data[comp].compName === type.name)) {
          check = true;
          type.key = varComponentTypes.data[comp].id
        }
      }
      return (check)
    })
    const componentDisplay = componentMap.map(x => {
      return <div key={x.key}>{x.component}</div>
    })
    return (
      <main className="input-tile-landing">

      {componentDisplay}


      </main>
    );
  }
}
function mapStateToProps(state) {
  return {varComponentTypes: state.clientDuck.varComponentTypes,
          checkcheck: state.clientDuck.checkcheck};
}
export default connect(mapStateToProps, {getComps})(InputTile);
