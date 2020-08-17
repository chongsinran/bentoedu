import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodebentoPage } from './codebento.page';

describe('CodebentoPage', () => {
  let component: CodebentoPage;
  let fixture: ComponentFixture<CodebentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodebentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodebentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
