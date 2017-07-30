import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/BugStorage.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];
	bugSortBy : string = 'name';
	byDescending : boolean = false;

	constructor(private bugStorage : BugStorageService){
		this.bugs = this.bugStorage.getAll();
	}
	onCreateClick(bugName : string){
		let newBug : IBug = this.bugStorage.addNew(bugName);
		this.bugs = [...this.bugs, newBug];
	}

	onRemoveClosedClick(){
		for(let index = this.bugs.length - 1; index >=0 ; index--){
			if (this.bugs[index].isClosed){
				this.bugStorage.remove(this.bugs[index]);
				this.bugs.splice(index,1);
			}
		}
	}

	onBugNameClick(bug : IBug){
		this.bugStorage.toggle(bug);
	}

}