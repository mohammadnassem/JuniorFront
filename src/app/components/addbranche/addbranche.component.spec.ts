import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbrancheComponent } from './addbranche.component';

describe('AddbrancheComponent', () => {
  let component: AddbrancheComponent;
  let fixture: ComponentFixture<AddbrancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbrancheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
