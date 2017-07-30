import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
	transform(input : string, trimLength : number = 30) : string {
		return input.length < trimLength ? input : input.substr(0,trimLength) + '...';
	}

}