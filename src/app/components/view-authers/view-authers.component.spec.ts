import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuthersComponent } from './view-authers.component';

describe('ViewAuthersComponent', () => {
  let component: ViewAuthersComponent;
  let fixture: ComponentFixture<ViewAuthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAuthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAuthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
