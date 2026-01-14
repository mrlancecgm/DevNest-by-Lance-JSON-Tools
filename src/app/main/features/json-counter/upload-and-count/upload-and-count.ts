import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { distinctUntilChanged, fromEvent, map, Subscription } from 'rxjs';

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
  private resizeSubscription!: Subscription;
  public jsonFileIcon: string = "assets/images/logos/json_file.png";

  ngOnInit() {
    // const width = window.innerWidth;
  }

  ngAfterViewInit() {
    this.setStyleAttributes();
  }

  ngAfterContentChecked() {
    if (!this.resizeSubscription) {
      this.resizeSubscription = fromEvent(window, 'resize')
        .pipe(
          map(() => ({ width: window.innerWidth, height: window.innerHeight })),
          distinctUntilChanged(
            (prev, curr) => prev.width === curr.width && prev.height === curr.height
          )
        )
        .subscribe(() => this.setStyleAttributes());
    }
  }
  
  setStyleAttributes() {
    setTimeout(() => {
      const screenW = window.innerWidth;
      const screenW60Percent = screenW * 0.6;
      const uploadBackdropH = screenW60Percent / 3;
      this.docStyle.setProperty("--uploadBackdropW",`${screenW60Percent}px`);
      this.docStyle.setProperty("--uploadBackdropBrokenLinesW",`${screenW60Percent-20}px`);
      this.docStyle.setProperty("--uploadBackdropBrokenLinesH",`${uploadBackdropH-20}px`);
      this.docStyle.setProperty("--uploadNCountTaglineContainerW",`${screenW60Percent}px`);
      this.docStyle.setProperty("--jsonFileIconUploadAndCountW",`${screenW60Percent * 0.1}px`);
      const textReference = document.getElementById('text-reference');
      if(textReference) {
        const referenceH = textReference.getBoundingClientRect().height;
        this.docStyle.setProperty('--uploadAndCountLogoH',`${referenceH}px`);
      }
    })
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
