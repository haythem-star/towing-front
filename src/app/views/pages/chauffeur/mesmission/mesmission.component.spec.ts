import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesmissionComponent } from './mesmission.component';

describe('MesmissionComponent', () => {
  let component: MesmissionComponent;
  let fixture: ComponentFixture<MesmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
