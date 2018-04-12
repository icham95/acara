import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JasaComponent } from './jasa.component';

describe('JasaComponent', () => {
  let component: JasaComponent;
  let fixture: ComponentFixture<JasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
