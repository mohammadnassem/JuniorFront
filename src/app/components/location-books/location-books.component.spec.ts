import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBooksComponent } from './location-books.component';

describe('LocationBooksComponent', () => {
  let component: LocationBooksComponent;
  let fixture: ComponentFixture<LocationBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
