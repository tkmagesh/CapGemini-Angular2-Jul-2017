import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'calculator-two',
	templateUrl : 'calculator-two.component.html',
	styleUrls : ['calculator.component.css'],
	providers : [CalculatorModel]
})
export class CalculatorTwoComponent{
	//calculator : CalculatorModel = new CalculatorModel();

	constructor(public calculator : CalculatorModel){

	}
}