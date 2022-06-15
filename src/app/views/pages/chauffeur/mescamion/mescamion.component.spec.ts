import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MescamionComponent } from './mescamion.component';

describe('MescamionComponent', () => {
  let component: MescamionComponent;
  let fixture: ComponentFixture<MescamionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MescamionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MescamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
