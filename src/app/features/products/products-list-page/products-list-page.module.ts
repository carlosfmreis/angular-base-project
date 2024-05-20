import { NgModule } from '@angular/core';
import { ProductsListPageComponent } from './products-list-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: ProductsListPageComponent,
  },
];

@NgModule({
  declarations: [ProductsListPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
  ],
})
export class ProductsListPageModule {}
