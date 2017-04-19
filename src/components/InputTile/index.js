import React from "react";
import "./inputTile.css";
import TestComp1 from '../TestComp1/index'
import TestComp2 from '../TestComp2/index'
import TestComp3 from '../TestComp3/index'
import TestComp4 from '../TestComp4/index'

export default function InputTile() {
	const componentTypes = [<TestComp1/>, <TestComp2/>, <TestComp3/>, <TestComp4/>]
	const varComponentTypes = [
    {compName: "TestComp1", index: 0, statusName: "Contact Info", completed: true},
    {compName: "TestComp2", index: 1, statusName: "Company Info", completed: false},
    {compName: "TestComp3", index: 2, statusName: "Image Upload", completed: true},
    {compName: "TestComp4", index: 3, statusName: "Social Media", completed: false}]
	const componentMap = componentTypes.filter((type, index)=>{
	var check = false
	for (var comp in varComponentTypes) {
			if(varComponentTypes[comp].compName === type.type.name) {
				check = true;
				type.type.key = varComponentTypes[comp].index
			}
	}
		return (
			check
		)
	})
	const componentDisplay = componentMap.map(x => {
			return <div key={x.type.key}>{x}</div>
	})

	return (
		<main className="input-tile-landing">
			{componentDisplay}

		</main>
	);
}
