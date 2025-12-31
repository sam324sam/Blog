import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Background } from './background';

describe('Background', () => {
  let component: Background;
  let fixture: ComponentFixture<Background>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Background]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Background);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
