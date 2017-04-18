import React from "react";
import "./inputTile.css";
import TestComp1 from '../TestComp1/index'
import TestComp2 from '../TestComp2/index'

export default function InputTile() {
	const componentTypes = [<TestComp1/>, <TestComp2/>]
	const varComponentTypes = [{compName: "TestComp1", index: 0, statusName: "Contact Info"}]
	const componentMap = componentTypes.filter((type, index)=>{

	var check = false
	for (var comp in varComponentTypes) {
			if(varComponentTypes[comp].compName === type.type.name) {
				check = true;
			}
	}

		return (
			check
		)
	})

	return (
		<main className="input-tile-landing">
			{componentMap}

		</main>
	);
}
