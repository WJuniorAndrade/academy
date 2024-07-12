import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTrainingComponent } from './back-training.component';

describe('BackTrainingComponent', () => {
  let component: BackTrainingComponent;
  let fixture: ComponentFixture<BackTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
