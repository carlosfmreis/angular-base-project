import { ErrorHandler, NgModule } from '@angular/core';
import { RestApiService } from './services/rest-api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { GlobalErrorHandler } from './handlers/error.handler';
import { EventsService } from './services/events.service';

@NgModule({
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    RestApiService,
    EventsService,
  ],
})
export class CoreModule {}
