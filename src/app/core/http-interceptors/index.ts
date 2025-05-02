import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { ApiPrefixInterceptor } from './api-prefix.interceptor';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { FakeBackendInterceptor } from './fake-backend.interceptors';


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
];