import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { UnauthorizedError } from '../errors/unauthorized.error';
import { NotFoundError } from '../errors/not-found.error';
import { ForbiddenError } from '../errors/forbidden.error';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 401:
          break;
        case 403:
          break;
        case 404:
          break;
        default:
          break;
      }
    } else {
      switch (error.constructor) {
        case UnauthorizedError:
          break;
        case ForbiddenError:
          break;
        case NotFoundError:
          break;
        default:
          break;
      }
    }
  }
}
