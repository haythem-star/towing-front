import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcamionComponent } from './editcamion.component';

describe('EditcamionComponent', () => {
  let component: EditcamionComponent;
  let fixture: ComponentFixture<EditcamionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcamionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
