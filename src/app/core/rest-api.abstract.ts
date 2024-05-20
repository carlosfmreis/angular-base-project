import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RestApi } from './rest-api.interface';
import { Observable } from 'rxjs';

export abstract class BaseRestApi implements RestApi {
  protected url: string;

  constructor(url: string, protected client: HttpClient) {
    this.url = url;
  }

  get<R>(
    path: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<R> {
    return this.client.get<R>(this.url + path, {
      headers: headers,
      params: params,
    });
  }

  post<R, B>(
    path: string,
    body?: B,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<R> {
    return this.client.post<R>(this.url + path, body, {
      headers: headers,
      params: params,
    });
  }

  put<R, B>(
    path: string,
    body?: B,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<R> {
    return this.client.put<R>(this.url + path, body, {
      headers: headers,
      params: params,
    });
  }

  delete<R>(
    path: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<R> {
    return this.client.delete<R>(this.url + path, {
      headers: headers,
      params: params,
    });
  }
}
