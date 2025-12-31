import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServices } from './my-services';

describe('MyServices', () => {
  let component: MyServices;
  let fixture: ComponentFixture<MyServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
