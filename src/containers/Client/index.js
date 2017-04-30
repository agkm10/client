import React from 'react';
//COMPONENTS
import InputTile from '../../components/InputTile/index';
import NavBarTop from '../../components/Nav/index';
import StatusBar from '../../components/StatusBar/index';
import WatsonChat from '../../components/WatsonChat/index';
//CSS
import './Client.css';

export default function Client( props ) {
    return (
        <main className="landing">
            <div>
                <WatsonChat/>
                <NavBarTop/>
                <InputTile/>
                <StatusBar/>
            </div>
        </main>
    )
}
