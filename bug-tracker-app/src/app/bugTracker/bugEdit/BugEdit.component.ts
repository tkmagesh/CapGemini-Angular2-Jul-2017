import { Component, Output, EventEmitter } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugServerService } from '../services/BugServer.service';
import { Router } from '@angular/router';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name : </label>
			<input type="text" #txtBugName>
			<input type="button" value="Create" (click)="onCreateClick(txtBugName.value)">
		</section>
	`,
	styleUrls : ['BugEdit.component.css']
})
export class BugEditComponent{

	/*@Output()
	newBug : EventEmitter<IBug> = new EventEmitter<IBug>();*/

	constructor(private bugServer : BugServerService, private router : Router){

	}

	onCreateClick(bugName : string){
		/*this.bugServer
			.addNew(bugName)
			.subscribe(newBugObject => this.newBug.emit(newBugObject))*/

		this.bugServer
			.addNew(bugName)
			.subscribe(_ => this.router.navigate(['bugs']));
		
	}
}