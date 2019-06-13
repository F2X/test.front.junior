import { TestBed, inject } from '@angular/core/testing';

import { louvre, tourEiffel } from './activity.mock.spec';
import { ActivityService } from './activity.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ActivityService', () => {
	let service: ActivityService;
	let httpCtrl: HttpTestingController;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				ActivityService,
			]
		});
		httpCtrl = TestBed.get(HttpTestingController);
	});
	beforeEach(inject([ActivityService], (_service: ActivityService) => {
		service = _service;
	}));
	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('getActivities', () => {
		it('should call http.get', () => {
			service.getActivities('paris').subscribe(d => d);

			const req = httpCtrl.expectOne(r => r.url === '/api/activities');
			expect(req.request.method).toEqual('GET');
			req.flush([]);
		});
		it('should call with destinationId', () => {
			service.getActivities('paris').subscribe(d => d);

			const req = httpCtrl.expectOne(r => r.url === '/api/activities');
			const params = req.request.params;
			expect(params.toString()).toEqual('destinationId=paris');
			req.flush([]);
		});
		it('should return the http result unscathed', () => {
			const results = [louvre, tourEiffel];
			service.getActivities('paris').subscribe(d => {
				expect(d).toBe(results);
			});
			const req = httpCtrl.expectOne(r => r.url === '/api/activities');
			req.flush(results);
		});

	});
});
