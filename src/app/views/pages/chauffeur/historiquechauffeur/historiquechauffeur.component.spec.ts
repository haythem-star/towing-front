import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueChauffeurComponent } from './historiquechauffeur.component';

describe('HistoriqueChauffeurComponent', () => {
  let component: HistoriqueChauffeurComponent;
  let fixture: ComponentFixture<HistoriqueChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueChauffeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
