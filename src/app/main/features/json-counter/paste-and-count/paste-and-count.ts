import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { distinctUntilChanged, fromEvent, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-paste-and-count',
  imports: [MatIconModule, CommonModule],
  templateUrl: './paste-and-count.html',
  styleUrl: './paste-and-count.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PasteAndCount {
  public pasteAndCountLogo: string = 'assets/images/logos/paste_and_count.png';
  public totalCount: number = 0;
  public hasError: boolean = false;
  private resizeSubscription!: Subscription;
  public isBelow768Px: boolean = false;
  public isBelow375Px: boolean = false;
  public textAreaAsInput: boolean = false;

  @ViewChild('jsonInput') jsonInput?: ElementRef;

  ngOnInit() {
    const width = window.innerWidth;
    this.isBelow768Px = width < 768;
    this.isBelow375Px = width < 375;
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
    const screenW = window.innerWidth;
    this.isBelow768Px = screenW < 768;
    this.isBelow375Px = screenW < 375;
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
    const jsonContainerH = screenH - totalHeadHeight;
    style.setProperty('--jsonContainerH', `${jsonContainerH * 0.9}px`);
  }

  isPotentialArray(text: string){
    return text.startsWith("[") && text.endsWith("]")
  }

  async pasteFromClipboard() {
    try {
      let clipboardText = await navigator.clipboard.readText();
      let clipboardText_reformat = "";
      let isReformat: boolean = false;
      if(!this.isPotentialArray(clipboardText)){
        clipboardText_reformat = `[${clipboardText}]`;
        isReformat = true;
      }
      if (this.jsonInput) {
        this.jsonInput.nativeElement.value = clipboardText;
        this.textAreaAsInput = clipboardText.length > 0;   
        const param = isReformat ? clipboardText_reformat : undefined;
        this.getCount(param);
      }
    } catch (error) {
      console.log("Error:",error);
      this.hasError = true;
    }
  }

  clearInput() {
    if (this.jsonInput) {
      this.jsonInput.nativeElement.value = '';
      this.totalCount = 0;
      this.hasError = false;
      this.textAreaAsInput = false;
    }
  }

  getCount(json_input_reformat?:string) {
    const processJSON = (json_input: string) => {
      let jsonData = json_input;
      let parsedJsonData = JSON.parse(jsonData);
      return {
        title: Object.keys(parsedJsonData)[0],
        data: JSON.parse(jsonData)
      };
    }
    let json_input_text = json_input_reformat 
      ? json_input_reformat 
      : this.jsonInput?.nativeElement.value;

    let json_details = processJSON(json_input_text);
    const jsonTitle = json_details.title;
    const parsedJsonData = json_details.data;
    if (jsonTitle !== '0') {
      let json_details = processJSON(`[${json_input_text}]`);
      const dataCount = Array.isArray(json_details.data) ? json_details.data.length : 0;
      this.totalCount = dataCount;
    } else {
      const dataCount = Array.isArray(parsedJsonData) ? parsedJsonData.length : 0;
      this.totalCount = dataCount;
    }
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
