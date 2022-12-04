import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMCCorporalComponent } from './imc-corporal.component';

describe('IMCCorporalComponent', () => {
  let component: IMCCorporalComponent;
  let fixture: ComponentFixture<IMCCorporalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMCCorporalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IMCCorporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
