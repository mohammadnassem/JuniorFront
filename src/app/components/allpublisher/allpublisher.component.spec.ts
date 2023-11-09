import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpublisherComponent } from './allpublisher.component';

describe('AllpublisherComponent', () => {
  let component: AllpublisherComponent;
  let fixture: ComponentFixture<AllpublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpublisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
