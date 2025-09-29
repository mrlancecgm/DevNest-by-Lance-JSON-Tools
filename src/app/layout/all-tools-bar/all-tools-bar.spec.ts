import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllToolsBar } from './all-tools-bar';

describe('AllToolsBar', () => {
  let component: AllToolsBar;
  let fixture: ComponentFixture<AllToolsBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllToolsBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllToolsBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
