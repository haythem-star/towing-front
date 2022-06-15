import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseClientComponent } from './baseclient.component';



describe('BaseClientComponent', () => {
  let component: BaseClientComponent;
  let fixture: ComponentFixture<BaseClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
