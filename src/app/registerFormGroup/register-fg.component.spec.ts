import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFGComponent } from './register-fg.component';

describe('RegisterFGComponent', () => {
  let component: RegisterFGComponent;
  let fixture: ComponentFixture<RegisterFGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
