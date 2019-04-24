import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubenComponent } from './ruben.component';

describe('RubenComponent', () => {
  let component: RubenComponent;
  let fixture: ComponentFixture<RubenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
