import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookByAuthorComponent } from './view-book-by-author.component';

describe('ViewBookByAuthorComponent', () => {
  let component: ViewBookByAuthorComponent;
  let fixture: ComponentFixture<ViewBookByAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookByAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookByAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
