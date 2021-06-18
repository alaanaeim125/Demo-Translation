import { ExcelComponent } from './components/excel/excel.component';
import { AppleComponent } from './components/apple/apple.component';
import { ToshibaComponent } from './components/toshiba/toshiba.component';
import { AccerComponent } from './components/accer/accer.component';
import { DellComponent } from './components/dell/dell.component';
import { HpComponent } from './components/hp/hp.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', component: DellComponent},
      { path: 'hp', component: HpComponent },
      { path: 'dell', component: DellComponent },
      { path: 'accer', component: AccerComponent },
      { path: 'toshiba', component: ToshibaComponent },
      { path: 'apple', component: AppleComponent },
    ],
  },
  {
    path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) 
  },
  {
    path: 'excel', component: ExcelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
