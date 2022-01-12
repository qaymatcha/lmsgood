import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddteachersComponent } from './addteachers.component';

describe('AddteachersComponent', () => {
  let component: AddteachersComponent;
  let fixture: ComponentFixture<AddteachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddteachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
