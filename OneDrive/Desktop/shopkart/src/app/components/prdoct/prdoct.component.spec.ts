import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdoctComponent } from './prdoct.component';

describe('PrdoctComponent', () => {
  let component: PrdoctComponent;
  let fixture: ComponentFixture<PrdoctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrdoctComponent]
    });
    fixture = TestBed.createComponent(PrdoctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
