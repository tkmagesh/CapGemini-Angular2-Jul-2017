import { Injectable } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugOperationsService } from './BugOperations.service';

@Injectable()
export class BugStorageService {
	private currentBugId : number = 0;
	private storage : Storage = window.localStorage;

	constructor(private bugOperations : BugOperationsService){

	}
	getAll() : IBug[] {
		let result : IBug[] = [];
		for(let index = 0; index < this.storage.length; index++){
			let key = this.storage.key(index),
				rawData = this.storage.getItem(key),
				bug = JSON.parse(rawData);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
			result.push(bug);
		}
		return result;
	}

	private save (bug : IBug) : void {
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	addNew(bugName : string) : IBug {
		let newBug = this.bugOperations.createNew(++this.currentBugId, bugName);
		this.save(newBug);
		return newBug;
	}
	toggle(bug : IBug) : IBug{
		this.bugOperations.toggle(bug);
		this.save(bug);
		return bug;
	}
	remove(bug : IBug) : void{
		this.storage.removeItem(bug.id.toString());
	}
}