import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IActivity } from './activity.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ActivityService {
	constructor(protected http: HttpClient) {}
	getActivities(destinationId: string): Observable<IActivity[]> {
		const params = {} as any;
		params.orderBy = 'name';
		params.destinationId = destinationId
		return this.http.get<IActivity[]>(`/api/activities`, { params: params });
	}
}
