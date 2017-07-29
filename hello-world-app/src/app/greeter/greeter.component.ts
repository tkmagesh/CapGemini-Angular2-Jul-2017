import { Component } from '@angular/core';

@Component({
	selector : 'greeter',
	templateUrl : 'greeter.component.html',
	styleUrls : ['greeter.component.css']
})
export class GreeterComponent{
	message : string = '[Default greet message]';

	onGreeterClick(username){
		this.message = `Hi ${username}, Have a nice day!!`;
	}
}