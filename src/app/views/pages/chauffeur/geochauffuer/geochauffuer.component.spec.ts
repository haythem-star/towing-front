import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoChauffuerComponent } from './geochauffuer.component';

describe('GeoChauffuerComponent', () => {
  let component: GeoChauffuerComponent;
  let fixture: ComponentFixture<GeoChauffuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoChauffuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoChauffuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
