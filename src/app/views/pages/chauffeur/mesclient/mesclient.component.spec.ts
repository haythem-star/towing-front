import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesclientComponent } from './mesclient.component';

describe('MesclientComponent', () => {
  let component: MesclientComponent;
  let fixture: ComponentFixture<MesclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
