import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoService } from './crypto-service';

describe('CryptoService', () => {
  let component: CryptoService;
  let fixture: ComponentFixture<CryptoService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
