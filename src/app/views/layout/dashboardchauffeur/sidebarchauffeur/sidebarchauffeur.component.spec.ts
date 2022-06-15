import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarChauffeurComponent } from './sidebarchauffeur.component';



describe('SidebarChauffeurComponent', () => {
  let component: SidebarChauffeurComponent;
  let fixture: ComponentFixture<SidebarChauffeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarChauffeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
