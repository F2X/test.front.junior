import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityComponent } from "./activity.component";
import { louvre } from "./activity.mock.spec";


describe('ActivityComponent', () => {
  let component: ActivityComponent;
  let fixture: ComponentFixture<ActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display activity name', () => {
    component.activity = louvre
    const h2 = fixture.nativeElement.querySelector('h2')
    expect(h2.textContent).toContain(louvre.name);
  });

  it('should display activity description', () => {
    component.activity = louvre
    const p = fixture.nativeElement.querySelector('p')
    expect(p.textContent).toContain(louvre.description);
  });
});
