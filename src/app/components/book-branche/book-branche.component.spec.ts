import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBrancheComponent } from './book-branche.component';

describe('BookBrancheComponent', () => {
  let component: BookBrancheComponent;
  let fixture: ComponentFixture<BookBrancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookBrancheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
