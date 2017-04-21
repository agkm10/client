import React, {Component} from "react";
import "./inputTile.css";
import {getComps} from '../../ducks/clientDuck'
import {connect} from "react-redux";
import TestComp1 from '../TestComp1/index'
import TestComp2 from '../TestComp2/index'
import TestComp3 from '../TestComp3/index'
import TestComp4 from '../TestComp4/index'

class InputTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentTypes: [ < TestComp1 />, < TestComp2 />, < TestComp3 />, < TestComp4 />
      ]
    }

  }
  componentDidMount() {
    this.props.getComps()
  }
  render() {

    const {varComponentTypes} = this.props;
    const {componentTypes} = this.state

    console.log('varComponentTypes', varComponentTypes)
    const componentMap = componentTypes.filter((type, index) => {
      var check = false
      for (var comp in varComponentTypes.data) {
        if (varComponentTypes.data[comp].compName === type.type.name) {
          check = true;
          type.type.key = varComponentTypes.data[comp].id
        }
      }
      return (check)
    })

    const componentDisplay = componentMap.map(x => {
      return <div key={x.type.key}>{x}</div>
    })

    return (
      <main className="input-tile-landing">
        {componentDisplay}
        <TestComp1/>

      </main>
    );
  }
}
function mapStateToProps(state) {
  return {varComponentTypes: state.clientDuck.varComponentTypes};
}
export default connect(mapStateToProps, {getComps})(InputTile);
