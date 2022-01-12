import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherviewassignmentsComponent } from './teacherviewassignments.component';

describe('TeacherviewassignmentsComponent', () => {
  let component: TeacherviewassignmentsComponent;
  let fixture: ComponentFixture<TeacherviewassignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherviewassignmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherviewassignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
