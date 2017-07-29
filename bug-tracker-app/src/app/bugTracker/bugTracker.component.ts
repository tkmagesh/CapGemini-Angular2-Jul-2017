import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService } from './services/BugOperations.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];
	bugSortBy : string = 'name';
	byDescending : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		this.bugs.push(this.bugOperations.createNew('Server communication failure'));
		this.bugs.push(this.bugOperations.createNew('Data Integrity checks failed'));
		this.bugs.push(this.bugOperations.createNew('User actions not recognized'));
		this.bugs.push(this.bugOperations.createNew('Application not responsive to users'));
	}
	onCreateClick(bugName : string){
		let newBug : IBug = this.bugOperations.createNew(bugName);
		this.bugs = [...this.bugs, newBug];
	}

	onRemoveClosedClick(){
		for(let index = this.bugs.length - 1; index >=0 ; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index,1);
		}
	}

	onBugNameClick(bug : IBug){
		this.bugOperations.toggle(bug);
	}

}