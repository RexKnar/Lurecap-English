import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsandcondtionsComponent } from './termsandcondtions.component';

describe('TermsandcondtionsComponent', () => {
  let component: TermsandcondtionsComponent;
  let fixture: ComponentFixture<TermsandcondtionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsandcondtionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsandcondtionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
