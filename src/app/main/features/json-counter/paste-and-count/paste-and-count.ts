import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-paste-and-count',
  imports: [MatIconModule],
  templateUrl: './paste-and-count.html',
  styleUrl: './paste-and-count.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PasteAndCount {
  public pasteAndCountLogo: string = 'assets/images/logos/paste_and_count.png';
  public totalCount: number = 0;
  public hasError: boolean = false;

  @ViewChild('jsonInput') jsonInput?: ElementRef;

  ngAfterViewInit() {
    this.setStyleAttributes();
  }

  setStyleAttributes() {
    const style = document.documentElement.style;
    const screenH = window.innerHeight;
    const header = document.querySelector('app-header');
    const headerH = header?.getBoundingClientRect().height;
    const subHeader = document.querySelector('app-subheader');
    const subHeaderH = subHeader?.getBoundingClientRect().height;
    let mainDivMTString = style.getPropertyValue('--mainDivMT');
    let mainDivMT = 0;
    let totalHeadHeight = 0;
    if (headerH && subHeaderH) {
      totalHeadHeight = headerH + subHeaderH;
    }
    if (mainDivMTString && mainDivMTString.includes('px')) {
      mainDivMTString = mainDivMTString.split('p')[0];
      mainDivMT = parseInt(mainDivMTString, 10);
    }
    totalHeadHeight = totalHeadHeight + mainDivMT;
    console.log('Total Head Height: ', totalHeadHeight);
    const jsonContainerH = screenH - totalHeadHeight;
    style.setProperty('--jsonContainerH', `${jsonContainerH * 0.9}px`);
  }

  async pasteFromClipboard() {
    try {
      const clipboardText = await navigator.clipboard.readText();
      console.log('Pasted content:', clipboardText);
      if (this.jsonInput) {
        this.jsonInput.nativeElement.value = clipboardText;
        this.getCount();
      }
    } catch (error) {
      this.hasError = true;
      console.error('Error pasting from clipboard:', error);
    }
  }

  clearInput() {
    if (this.jsonInput) {
      this.jsonInput.nativeElement.value = '';
      this.totalCount = 0;
      this.hasError = false;
    }
  }

  getCount() {
    let jsonData = this.jsonInput?.nativeElement.value;
    let parsedJsonData = JSON.parse(jsonData);
    let jsonTitle: any = Object.keys(parsedJsonData)[0];
    if (jsonTitle !== '0') {
      this.totalCount = parsedJsonData[jsonTitle].length;
    } else {
      const dataCount = Array.isArray(parsedJsonData) ? parsedJsonData.length : 0;
      this.totalCount = dataCount;
    }
  }
}
