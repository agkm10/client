import React from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavBarTop from '../Nav/index'

export function App() {
	return (
		<div className="App">
      
			<NavBarTop />
		</div>
	);
}


injectTapEventPlugin();
export default App;
