import { Pipe, PipeTransform } from '@angular/core';

interface IComparer{
	(item1 : any, item2 : any) : number
}


@Pipe({
	name : 'sort',
	pure : true
})
export class SortPipe implements PipeTransform{

	private getComparerFor(attrName : string) : IComparer {
		return function(item1 : any, item2 : any) : number {
			if (item1[attrName] < item2[attrName]) return -1;
			if (item1[attrName] > item2[attrName]) return 1;
			return 0;
		}
	}

	private getDescendingComparerFor(comparer : IComparer) : IComparer{
		return function(item1 : any, item2 : any) : number{
			return comparer(item1, item2) * -1;
		}
	}

	transform(list : any[] = [], attrName : string, byDescending : boolean = false) : any[]{
		console.log('sort pipe is processing');
		if (!attrName) return list;
		let comparer = this.getComparerFor(attrName);
		if (byDescending)
			comparer = this.getDescendingComparerFor(comparer);
		return list.sort(comparer);
	}
}