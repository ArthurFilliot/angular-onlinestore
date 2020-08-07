import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartmanagerComponent } from './cartmanager.component';

describe('CartmanagerComponent', () => {
  let component: CartmanagerComponent;
  let fixture: ComponentFixture<CartmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
