import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorReadingComponent } from './error-reading.component';

describe('ErrorReadingComponent', () => {
  let component: ErrorReadingComponent;
  let fixture: ComponentFixture<ErrorReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorReadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
