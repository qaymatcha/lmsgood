import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPlatformComponent } from './teacher-platform.component';

describe('TeacherPlatformComponent', () => {
  let component: TeacherPlatformComponent;
  let fixture: ComponentFixture<TeacherPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
