import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupsComponent } from './coups.component';

describe('CoupsComponent', () => {
  let component: CoupsComponent;
  let fixture: ComponentFixture<CoupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
