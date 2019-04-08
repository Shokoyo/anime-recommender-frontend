import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsListEntryComponent } from './recommendations-list-entry.component';

describe('RecommendationsListEntryComponent', () => {
  let component: RecommendationsListEntryComponent;
  let fixture: ComponentFixture<RecommendationsListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationsListEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationsListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
