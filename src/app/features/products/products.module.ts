import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsService } from './services/products.service';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./products-list-page/products-list-page.module').then(
            (m) => m.ProductsListPageModule
          ),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./product-details-page/product-details.module').then(
            (m) => m.ProductDetailsModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [ProductsComponent],
  providers: [ProductsService],
  imports: [RouterModule.forChild(routes)],
})
export class ProductsModule {}
