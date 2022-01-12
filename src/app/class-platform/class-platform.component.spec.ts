import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassPlatformComponent } from './class-platform.component';

describe('ClassPlatformComponent', () => {
  let component: ClassPlatformComponent;
  let fixture: ComponentFixture<ClassPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
