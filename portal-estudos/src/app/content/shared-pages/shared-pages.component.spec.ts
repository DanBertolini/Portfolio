import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPagesComponent } from './shared-pages.component';

describe('SharedPagesComponent', () => {
  let component: SharedPagesComponent;
  let fixture: ComponentFixture<SharedPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
