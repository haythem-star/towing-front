import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoClientComponent } from './geoclient.component';

describe('GeoClientComponent', () => {
  let component: GeoClientComponent;
  let fixture: ComponentFixture<GeoClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
