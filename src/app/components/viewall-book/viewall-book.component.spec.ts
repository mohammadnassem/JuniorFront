import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallBookComponent } from './viewall-book.component';

describe('ViewallBookComponent', () => {
  let component: ViewallBookComponent;
  let fixture: ComponentFixture<ViewallBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
