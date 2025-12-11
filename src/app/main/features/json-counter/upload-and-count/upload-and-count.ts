import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-upload-and-count',
  imports: [MatIconModule, CommonModule],
  templateUrl: './upload-and-count.html',
  styleUrl: './upload-and-count.scss',
  encapsulation: ViewEncapsulation.None
})
export class UploadAndCount {
  public uploadAndCountLogo: string = 'assets/images/logos/upload_and_count.png';
  public totalCount: number = 0;
  public hasError: boolean = false;
  public docStyle = document.documentElement.style;

  ngAfterViewInit() {
    this.setStyleAttributes();
  }
  
  setStyleAttributes() {
    setTimeout(() => {
      const textReference = document.getElementById('text-reference');
      if(textReference) {
        const referenceH = textReference.getBoundingClientRect().height;
        this.docStyle.setProperty('--uploadAndCountLogoH',`${referenceH}px`);
      }
    })
  }
}
