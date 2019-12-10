import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageGetComponent } from './package-get.component';

describe('PackageGetComponent', () => {
  let component: PackageGetComponent;
  let fixture: ComponentFixture<PackageGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
