import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchBookComponent } from './serch-book.component';

describe('SerchBookComponent', () => {
  let component: SerchBookComponent;
  let fixture: ComponentFixture<SerchBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerchBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
