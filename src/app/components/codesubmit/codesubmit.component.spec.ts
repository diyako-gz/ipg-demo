import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesubmitComponent } from './codesubmit.component';

describe('CodesubmitComponent', () => {
  let component: CodesubmitComponent;
  let fixture: ComponentFixture<CodesubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodesubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodesubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
