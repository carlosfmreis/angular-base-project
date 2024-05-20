import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ProductResponseModel } from '../models/product-response.model';
import { AppRoutes } from '../../../core/data/routes.data';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.sass',
})
export class ProductDetailsPageComponent implements OnInit, OnDestroy {
  private _paramsSubscription?: Subscription;
  private _productSubscription?: Subscription;

  product?: ProductResponseModel;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this._paramsSubscription?.unsubscribe();
    this._paramsSubscription = this._activatedRoute.params.subscribe(
      (value) => {
        this._productSubscription?.unsubscribe();
        this._productSubscription = this._productsService
          .get(value['id'])
          .subscribe((value) => {
            this.product = value;
          });
      }
    );
  }

  ngOnDestroy(): void {
    this._paramsSubscription?.unsubscribe();
    this._productSubscription?.unsubscribe();
  }

  get productsPageLink(): string {
    return AppRoutes.productsPage;
  }
}
