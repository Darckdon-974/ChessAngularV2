import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupDetailComponent } from './coup-detail.component';

describe('CoupDetailComponent', () => {
  let component: CoupDetailComponent;
  let fixture: ComponentFixture<CoupDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoupDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
