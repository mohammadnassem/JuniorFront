import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchDetalComponent } from './branch-detal.component';

describe('BranchDetalComponent', () => {
  let component: BranchDetalComponent;
  let fixture: ComponentFixture<BranchDetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchDetalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
