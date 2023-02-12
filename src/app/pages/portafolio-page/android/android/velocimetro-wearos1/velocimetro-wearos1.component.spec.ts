import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocimetroWearos1Component } from './velocimetro-wearos1.component';

describe('VelocimetroWearos1Component', () => {
  let component: VelocimetroWearos1Component;
  let fixture: ComponentFixture<VelocimetroWearos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelocimetroWearos1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelocimetroWearos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
