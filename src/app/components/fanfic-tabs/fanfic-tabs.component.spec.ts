import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanficTabsComponent } from './fanfic-tabs.component';

describe('FanficTabsComponent', () => {
  let component: FanficTabsComponent;
  let fixture: ComponentFixture<FanficTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanficTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanficTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
