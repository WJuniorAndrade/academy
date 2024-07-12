import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTrainingContainer } from './back-training.container';

describe('BackTraining.ContainerComponent', () => {
  let component: BackTrainingContainer;
  let fixture: ComponentFixture<BackTrainingContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackTrainingContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackTrainingContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
