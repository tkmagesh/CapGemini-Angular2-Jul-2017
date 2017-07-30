import { IBug } from '../models/IBug';

export class BugOperationsService{
	//private currentBugId : number = 0;

	createNew(id : number, bugName : string) : IBug{
		return {
			id : id,
			name : bugName,
			isClosed : false
		}
	}

	toggle(bug : IBug) : void {
		bug.isClosed = !bug.isClosed;
	}
}