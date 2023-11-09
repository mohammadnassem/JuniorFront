import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAutherComponent } from './view-auther.component';

describe('ViewAutherComponent', () => {
  let component: ViewAutherComponent;
  let fixture: ComponentFixture<ViewAutherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAutherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAutherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
