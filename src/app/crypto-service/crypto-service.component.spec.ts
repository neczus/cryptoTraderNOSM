import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoServiceComponent } from './crypto-service.component';

describe('CryptoServiceComponent', () => {
  let component: CryptoServiceComponent;
  let fixture: ComponentFixture<CryptoServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
