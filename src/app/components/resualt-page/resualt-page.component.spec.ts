import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResualtPageComponent } from './resualt-page.component';

describe('ResualtPageComponent', () => {
  let component: ResualtPageComponent;
  let fixture: ComponentFixture<ResualtPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResualtPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResualtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
