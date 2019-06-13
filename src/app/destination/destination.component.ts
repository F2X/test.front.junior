import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDestination } from './destination.model';
import { IActivity, ActivityService } from '../activity';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-destination',
	templateUrl: './destination.component.html',
	styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
	destination: IDestination;
	activities$: Observable<IActivity[]>;
	get bgImg() { return `url('${this.destination.bg}')`; }
	constructor(
		protected route: ActivatedRoute,
		protected activityService: ActivityService,
	) {}
	ngOnInit() {
		this.route.data
		.subscribe((data: { destination: IDestination }) => {
			this.destination = data.destination;
		});
		this.activities$ = this.activityService.getActivities(this.destination.id)
	}
}
