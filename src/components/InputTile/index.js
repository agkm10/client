import React, { Component } from "react";
import { connect } from "react-redux";
//EXPORTED FUNCTIONS
import { getComps } from '../../ducks/clientDuck';
import { getFiles } from '../../ducks/uploadDuck';
import { getInputs } from '../../ducks/inputDuck';
//COMPONENTS
import SocialInputs from '../Social/index';
import LogoUpload from '../Logo/index';
import BizInfo from '../BizInfo/index';
import BillInfo from '../BillInfo/index';
import WebPages from '../WebPages/index';
import Design from '../Design/index';
//CSS
import "./inputTile.css";


class InputTile extends Component {
    constructor() {
        super()

        this.state = {
            componentTypes: [
                { component: < SocialInputs />, name: 'SocialInputs' },
                { component: < LogoUpload />, name: 'LogoUpload' },
                { component: < BizInfo />, name: 'BizInfo' },
                { component: < BillInfo />, name: 'BillInfo' },
                { component: < WebPages />, name: 'WebPages' },
                { component: < Design />, name: 'Design' }
            ]
        }
    }

    componentDidMount() {
        this.props.getComps()
        this.props.getInputs()
        this.props.getFiles()
    }

    render() {
        const { varComponentTypes } = this.props;
        const { componentTypes } = this.state;

        const componentMap = componentTypes.filter( ( type, index ) => {
            let check = false;
            for ( let comp in varComponentTypes.data ) {
                if ( varComponentTypes.data[comp].compName === type.name ) {
                    check = true;
                    type.key = varComponentTypes.data[comp].id
                }
            }
            return ( check )
        })

        const componentDisplay = componentMap.map( x => {
            return (
                <div key={ x.key }>{ x.component }</div>
            )
        })

        return (
            <main className="input-tile-landing">
                { componentDisplay }
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        varComponentTypes: state.clientDuck.varComponentTypes,
        checkcheck: state.clientDuck.checkcheck
    }
}

export default connect( mapStateToProps, { getComps, getFiles, getInputs } )( InputTile );
