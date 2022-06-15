import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcamionComponent } from './listcamion.component';

describe('ListcamionComponent', () => {
  let component: ListcamionComponent;
  let fixture: ComponentFixture<ListcamionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcamionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
