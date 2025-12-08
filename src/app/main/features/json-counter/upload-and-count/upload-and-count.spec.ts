import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAndCount } from './upload-and-count';

describe('UploadAndCount', () => {
  let component: UploadAndCount;
  let fixture: ComponentFixture<UploadAndCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadAndCount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadAndCount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
