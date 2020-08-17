import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodesavePage } from './codesave.page';

describe('CodesavePage', () => {
  let component: CodesavePage;
  let fixture: ComponentFixture<CodesavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodesavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodesavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
