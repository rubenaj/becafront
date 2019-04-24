import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfantilesComponent } from './infantiles.component';

describe('InfantilesComponent', () => {
  let component: InfantilesComponent;
  let fixture: ComponentFixture<InfantilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfantilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfantilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
