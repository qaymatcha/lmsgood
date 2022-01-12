import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviewassignmentComponent } from './studentviewassignment.component';

describe('StudentviewassignmentComponent', () => {
  let component: StudentviewassignmentComponent;
  let fixture: ComponentFixture<StudentviewassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentviewassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentviewassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
