import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugServerService} from './services/BugServer.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];
	bugSortBy : string = 'name';
	byDescending : boolean = false;

	constructor(private bugServer : BugServerService){
		this.bugServer
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
		
	}
	
	onBugCreated(newBug){
		this.bugs.push(newBug);
	}

	onRemoveClosedClick(){
		for(let index = this.bugs.length - 1; index >=0 ; index--){
			if (this.bugs[index].isClosed){
				this.bugServer
					.remove(this.bugs[index])
					.subscribe(_ => this.bugs.splice(index,1))
			}
		}
	}

	onBugNameClick(bug : IBug){
		this.bugServer.toggle(bug);
	}

}