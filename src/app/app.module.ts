import { ProductsModule } from './modules/products/products.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HpComponent } from './components/hp/hp.component';
import { DellComponent } from './components/dell/dell.component';
import { AppleComponent } from './components/apple/apple.component';
import { AccerComponent } from './components/accer/accer.component';
import { ToshibaComponent } from './components/toshiba/toshiba.component';
import { ExcelComponent } from './components/excel/excel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HpComponent,
    DellComponent,
    AppleComponent,
    AccerComponent,
    ToshibaComponent,
    ExcelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule,
    TranslateModule.forRoot({
      defaultLanguage: localStorage.getItem('lang') || 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
