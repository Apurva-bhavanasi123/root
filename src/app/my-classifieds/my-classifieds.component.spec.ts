import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClassifiedsComponent } from './my-classifieds.component';

describe('MyClassifiedsComponent', () => {
  let component: MyClassifiedsComponent;
  let fixture: ComponentFixture<MyClassifiedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClassifiedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClassifiedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
