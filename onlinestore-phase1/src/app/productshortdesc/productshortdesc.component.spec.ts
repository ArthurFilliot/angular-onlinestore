import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductshortdescComponent } from './productshortdesc.component';

describe('ProductshortdescComponent', () => {
  let component: ProductshortdescComponent;
  let fixture: ComponentFixture<ProductshortdescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductshortdescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductshortdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
