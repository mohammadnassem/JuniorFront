import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPublisherComponent } from './view-all-publisher.component';

describe('ViewAllPublisherComponent', () => {
  let component: ViewAllPublisherComponent;
  let fixture: ComponentFixture<ViewAllPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllPublisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
