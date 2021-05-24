import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  language: string;
  lang: string = 'en';
  direction: string = '';
  constructor(public translate: TranslateService, private router:Router) { }

  ngOnInit(): void {
    var lang = localStorage.getItem('lang');
    switch(lang) {
      case "ar":
        document.getElementsByTagName('body')[0].dir='rtl';
        this.translate.use('ar');
        localStorage.setItem('lang', 'ar');
        this.language = "اللغة العربية";
        this.direction = 'rtl';
        this.lang = 'ar';
        break;

      case "en": 
        document.getElementsByTagName('body')[0].dir='ltr';
        this.translate.use('en');
        localStorage.setItem('lang', 'en');
        this.language = "English";
        this.direction = 'ltr';
        this.lang = 'en';
        break;

        default:
          document.getElementsByTagName('body')[0].dir='ltr';
          this.translate.use('en');
          localStorage.setItem('lang', 'en');
          this.language = "English";
          this.direction = 'ltr';
          this.lang = 'en';
          break;
    }
  }

  changeLanguage(lang) {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);

    this.lang = lang;
    if(lang === 'ar') {
      document.getElementsByTagName('body')[0].dir='rtl';
        this.translate.use('ar');
        localStorage.setItem('lang', 'ar');
        this.language = "اللغة العربية";
        this.direction = 'rtl'
    } else {
      document.getElementsByTagName('body')[0].dir='ltr';
      this.translate.use('en');
      localStorage.setItem('lang', 'en');
      this.language = "English";
      this.direction = 'ltr'
    }
  }

  navigateToProducts() {
this.router.navigate(['/products'])
  }

  navigateToHome() {
    this.router.navigate(['/'])
  }
}
