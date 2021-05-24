import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductsModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

