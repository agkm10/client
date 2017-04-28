import React, { Component } from "react";
import { getComps } from '../../ducks/clientDuck';
import { connect } from "react-redux";
//COMPONENTS
import SocialInputs from '../Social/index';
import LogoUpload from '../Logo/index';
import BizInfo from '../BizInfo/index';
import BillInfo from '../BillInfo/index';
import WebPages from '../WebPages/index';
import Design from '../Design/index';
//MATERIAL UI
import IconButton from 'material-ui/IconButton';
import IconComplete from 'material-ui/svg-icons/navigation/check';
import IconNotComplete from 'material-ui/svg-icons/content/clear';
import { grey50  } from 'material-ui/styles/colors';
import LinearProgress from 'material-ui/LinearProgress';
//CSS
import "./statusbar.css";

class StatusBar extends Component {
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

    render() {

        const { varComponentTypes } = this.props;
        const { componentTypes } = this.state;
        let compCount = 0;
        let compCount1 = 0;
        const componentMap = componentTypes.map( ( type, index ) => {
            let check = false
            let check2 = false;
            for ( let comp in varComponentTypes.data ) {
                if ( varComponentTypes.data[comp].compName === type.name ) {
                    check = true;
                    compCount1 += 1;
                    type.statusName = varComponentTypes.data[comp].statusName
                    type.key = varComponentTypes.data[comp].id
                    if ( varComponentTypes.data[comp].completed === true ) {
                        compCount += 1;
                        check2 = true;
                    }
                }
            }
            if ( check && check2 ) {
                return (
                    <div key={ type.key } className='status-point sPComplete'>
                        <IconButton tooltip={ type.statusName } tooltipPosition="top-center">
                            <IconComplete color={ grey50 }/>
                        </IconButton>
                    </div>
                )
            }
            else if ( check ) {
                return (
                    <div key={ type.key } className='status-point sPIncomplete'>
                        <IconButton tooltip={ type.statusName } tooltipPosition="top-center">
                            <IconNotComplete color={ grey50 }/>
                        </IconButton>
                    </div>
                )
            }
            return null
        })

        let percentCompleted = !compCount1
            ?0
            :Math.floor( ( compCount / compCount1 ) * 100 )

        return (
            <main className="status-bar-landing">
                <div className="status-bar-left">
                    { componentMap }
                </div>
                <div className="status-bar-right">
                    <div className="percenttext">{ percentCompleted }% Complete</div>
                    <LinearProgress mode="determinate" value={ percentCompleted }/>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return { varComponentTypes: state.clientDuck.varComponentTypes }
}

export default connect( mapStateToProps, { getComps } )( StatusBar );
