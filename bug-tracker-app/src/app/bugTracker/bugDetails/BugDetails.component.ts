import { Component, OnInit } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugServerService } from '../services/BugServer.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
	selector : 'bug-details',
	template : `
		<h3>Bug Details</h3>
		<hr/>
		<section class="details">
			{{currentBug | json}}
		</section>
	`
})
export class BugDetailsComponent implements OnInit {

	currentBug : IBug ;

	constructor(private bugServer : BugServerService, private activatedRoute : ActivatedRoute){

	}

	ngOnInit(){
		this.activatedRoute.params.map((p:any) => p.id)
			.subscribe(id => this.bugServer.get(id)
				.subscribe(bug => this.currentBug = bug));
	}
}