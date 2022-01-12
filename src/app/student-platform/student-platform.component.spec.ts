import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPlatformComponent } from './student-platform.component';

describe('StudentPlatformComponent', () => {
  let component: StudentPlatformComponent;
  let fixture: ComponentFixture<StudentPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
