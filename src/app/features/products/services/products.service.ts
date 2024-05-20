import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestApiService } from '../../../core/services/rest-api.service';
import { ProductResponseModel } from '../models/product-response.model';

interface BaseProductsService {
  getAll(): Observable<ProductResponseModel[]>;

  get(id: number): Observable<ProductResponseModel>;
}

@Injectable()
export class ProductsService implements BaseProductsService {
  constructor(private _restApiService: RestApiService) {}

  getAll(): Observable<ProductResponseModel[]> {
    return this._restApiService.get<ProductResponseModel[]>(`/products`);
  }

  get(id: number): Observable<ProductResponseModel> {
    return this._restApiService.get<ProductResponseModel>(`/products/${id}`);
  }
}
