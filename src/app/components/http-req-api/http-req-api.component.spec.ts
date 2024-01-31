import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpReqApiComponent } from './http-req-api.component';

describe('HttpReqApiComponent', () => {
  let component: HttpReqApiComponent;
  let fixture: ComponentFixture<HttpReqApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpReqApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpReqApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
