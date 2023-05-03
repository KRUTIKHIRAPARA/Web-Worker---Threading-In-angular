import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiThreadingComponent } from './multi-threading.component';

describe('MultiThreadingComponent', () => {
  let component: MultiThreadingComponent;
  let fixture: ComponentFixture<MultiThreadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiThreadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiThreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
