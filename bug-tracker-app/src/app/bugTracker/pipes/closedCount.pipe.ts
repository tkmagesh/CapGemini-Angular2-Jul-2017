import { Pipe, PipeTransform } from '@angular/core';
import { IBug } from '../models/IBug';

@Pipe({
	name : 'closedCount',
	pure : false
})
export class ClosedCountPipe implements PipeTransform{
	transform(bugs : IBug[]) : number{
		let closedCount = 0;
		for(let index=0; index < bugs.length; index++)
			if(bugs[index].isClosed)
				++closedCount;
		return closedCount;
	}
}