import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsSearchComponent } from './recommendations-search.component';

describe('RecommendationsSearchComponent', () => {
  let component: RecommendationsSearchComponent;
  let fixture: ComponentFixture<RecommendationsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
