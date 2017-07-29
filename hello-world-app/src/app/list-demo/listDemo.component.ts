import { Component } from '@angular/core';

@Component({
	selector : 'list-demo',
	template : `
		<h1>Listing Demo</h1>
		<ol>
			<li *ngFor="let product of products">
				{{product}}
			</li>
		</ol>
	`
})
export class ListDemoComponent{
	products : Array<string> = [
		'Pen',
		'Pencil',
		'Marker',
		'Mouse'
	];
}