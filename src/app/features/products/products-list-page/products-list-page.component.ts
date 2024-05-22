import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Subscription } from 'rxjs';
import { ProductResponseModel } from '../models/product-response.model';
import { AppRoutes } from '../../../core/data/routes.data';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrl: './products-list-page.component.sass',
})
export class ProductsListPageComponent implements OnInit, OnDestroy {
  private _productsSubscription?: Subscription;

  products: ProductResponseModel[] = [];

  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    this._productsSubscription?.unsubscribe();
    this._productsSubscription = this._productsService
      .getAll()
      .subscribe((value) => {
        this.products = value;
      });
  }

  ngOnDestroy(): void {
    this._productsSubscription?.unsubscribe();
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  productDetailsRoute(id: number): string {
    return AppRoutes.productDetailsPage(id);
  }
}
