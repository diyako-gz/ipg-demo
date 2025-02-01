import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketUserComponent } from './basket-user.component';

describe('BasketUserComponent', () => {
  let component: BasketUserComponent;
  let fixture: ComponentFixture<BasketUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
