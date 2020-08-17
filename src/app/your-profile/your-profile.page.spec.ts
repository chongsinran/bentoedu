import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourProfilePage } from './your-profile.page';

describe('YourProfilePage', () => {
  let component: YourProfilePage;
  let fixture: ComponentFixture<YourProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
