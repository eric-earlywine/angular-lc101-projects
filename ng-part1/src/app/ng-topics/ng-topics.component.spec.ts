import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTopicsComponent } from './ng-topics.component';

describe('NgTopicsComponent', () => {
  let component: NgTopicsComponent;
  let fixture: ComponentFixture<NgTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
