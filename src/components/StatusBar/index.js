import React from "react";
import TestComp1 from '../TestComp1/index'
import TestComp2 from '../TestComp2/index'
import TestComp3 from '../TestComp3/index'
import TestComp4 from '../TestComp4/index'

export default function StatusBar() {
	const componentTypes = [<TestComp1/>, <TestComp2/>, <TestComp3/>, <TestComp4/>]
	const varComponentTypes = [
    {compName: "TestComp1", index: 0, statusName: "Contact Info", completed: true},
    {compName: "TestComp2", index: 1, statusName: "Company Info", completed: false},
    {compName: "TestComp3", index: 2, statusName: "Image Upload", completed: true},
    {compName: "TestComp4", index: 3, statusName: "Social Media", completed: false}]
  var compCount =0;
  var compCount1 =0;
	const componentMap = componentTypes.map((type, index)=>{
	var check = false
  var check2 = false;
	for (var comp in varComponentTypes) {
			if(varComponentTypes[comp].compName === type.type.name) {
				check = true;
        compCount1 +=1;
        type.type.statusName = varComponentTypes[comp].statusName
        type.type.key = varComponentTypes[comp].index
        if(varComponentTypes[comp].completed === true){
          compCount += 1;
          check2 = true;
        }
			}
	}
    if (check&&check2){
      return <div key={type.type.key} className='status-point sPComplete'>{type.type.statusName}</div>
    }else if (check){
      return <div key={type.type.key} className='status-point sPIncomplete'>{type.type.statusName}</div>
    }
	})
  var percentCompleted = Math.floor((compCount/compCount1)*100);

	return (
		<main className="status-bar-landing">
      <div className="status-bar-left">
			     {componentMap}
      </div>
      <div className="status-bar-right">
        Completed: {percentCompleted}%
      </div>
		</main>
	);
}