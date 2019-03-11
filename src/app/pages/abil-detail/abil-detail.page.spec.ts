import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilDetailPage } from './abil-detail.page';

describe('AbilDetailPage', () => {
  let component: AbilDetailPage;
  let fixture: ComponentFixture<AbilDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
