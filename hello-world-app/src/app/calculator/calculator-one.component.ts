import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'calculator-one',
	templateUrl : 'calculator-one.component.html',
	styleUrls : ['calculator.component.css'],
	providers : [CalculatorModel]
})
export class CalculatorOneComponent{
	
	//calculator : CalculatorModel = new CalculatorModel();

	constructor(public calculator : CalculatorModel){

	}

}