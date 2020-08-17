import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassHomePage } from './class-home.page';

describe('ClassHomePage', () => {
  let component: ClassHomePage;
  let fixture: ComponentFixture<ClassHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
