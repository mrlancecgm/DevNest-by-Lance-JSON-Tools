import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteAndCount } from './paste-and-count';

describe('PasteAndCount', () => {
  let component: PasteAndCount;
  let fixture: ComponentFixture<PasteAndCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasteAndCount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasteAndCount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
