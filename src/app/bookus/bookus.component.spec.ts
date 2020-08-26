import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookusComponent } from './bookus.component';

describe('BookusComponent', () => {
  let component: BookusComponent;
  let fixture: ComponentFixture<BookusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
