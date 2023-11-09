import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbookreserveByuserComponent } from './allbookreserve-byuser.component';

describe('AllbookreserveByuserComponent', () => {
  let component: AllbookreserveByuserComponent;
  let fixture: ComponentFixture<AllbookreserveByuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllbookreserveByuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbookreserveByuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
