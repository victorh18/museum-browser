import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniqueLabelComponent } from './technique-label.component';

describe('TechniqueLabelComponent', () => {
  let component: TechniqueLabelComponent;
  let fixture: ComponentFixture<TechniqueLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechniqueLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechniqueLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
