import { Injectable } from '@angular/core';
import { BaseRestApi } from '../../core/rest-api.abstract';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../core/environments/environment';

@Injectable()
export class RestApiService extends BaseRestApi {
  constructor(protected override client: HttpClient) {
    super(environment.apiUrl, client);
  }
}
