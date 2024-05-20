import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RestApi {
  get<R>(
    path: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<R>;

  post<R, B>(
    path: string,
    body?: B,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<R>;

  put<R, B>(
    path: string,
    body?: B,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<R>;

  delete<R>(
    path: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<R>;
}
