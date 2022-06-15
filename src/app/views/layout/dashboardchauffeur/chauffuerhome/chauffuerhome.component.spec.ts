import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChauffuerHomeComponent } from './chauffuerhome.component';



describe('ChauffuerHomeComponent', () => {
  let component: ChauffuerHomeComponent;
  let fixture: ComponentFixture<ChauffuerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffuerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffuerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
