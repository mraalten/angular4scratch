import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktgroepenComponent } from './produktgroepen.component';

describe('ProduktgroepenComponent', () => {
  let component: ProduktgroepenComponent;
  let fixture: ComponentFixture<ProduktgroepenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduktgroepenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktgroepenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
