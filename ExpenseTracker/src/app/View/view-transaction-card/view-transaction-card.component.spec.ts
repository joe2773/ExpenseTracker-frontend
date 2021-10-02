import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransactionCardComponent } from './view-transaction-card.component';

describe('ViewTransactionCardComponent', () => {
  let component: ViewTransactionCardComponent;
  let fixture: ComponentFixture<ViewTransactionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTransactionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransactionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
