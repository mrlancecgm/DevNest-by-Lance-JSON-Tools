import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: false
})
export class Header {
  public jsonToolsLogoLabel = "assets/images/logos/logo_label.png";
  public pasteAndCountIcon = "assets/images/icons/png/paste_and_count.png";
  public uploadAndCountIcon = "assets/images/icons/png/upload_and_count.png";
  public jsonToSqlIcon = "assets/images/icons/png/json-to-sql-logo.png"; 
  public jsonToXlsxIcon = "assets/images/icons/png/json_to_xlsx.png";
  public xlsxToJsonIcon = "assets/images/icons/png/xlsx_to_json.png";
  public jsonDataSplitterIcon = "assets/images/icons/png/json_splitter_logo.png";
  public jsonFormatterIcon = "assets/images/icons/png/json_formatter.png";
  public allToolsShown: boolean = false;

  constructor(private router: Router) {}

  goTo(targetUrl: string) {
    this.router.navigate([`/${targetUrl}`]);
  }

  toggleAllToolsVisibility(){
    this.allToolsShown = !this.allToolsShown;
    let subheaderPos = this.allToolsShown ? '280px' : '60px';
    let mainDivMT = subheaderPos == '60px' ? '120px' : '370px';
    document.documentElement.style.setProperty('--subheaderPos', subheaderPos);
    document.documentElement.style.setProperty('--mainDivMT', mainDivMT);
  }
}
