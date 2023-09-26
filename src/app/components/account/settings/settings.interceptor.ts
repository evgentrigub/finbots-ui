import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UserProfileDto } from '../../../models/user.model';
import { HttpUtils } from '../../../services/http-utils.service';
import { UserService } from '../../../services/user.service';

/**
 * GET /profile
 */
@Injectable()
export class SettingsInterceptor implements HttpInterceptor {
  constructor(
    private service: UserService,
    private httpUtils: HttpUtils
  ) { }

  // TODO add global flag isDemo
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('/user')) {
      this.httpUtils.log(req);
      switch (req.method) {
        case 'GET':
          return of(new HttpResponse({ body: this.getBody() })).pipe(delay(1000));

        case 'PUT':
          this.service.mockUserProfile = { ...req.body }
          return of(new HttpResponse({}))

        default:
          break;
      }
    }
    return next.handle(req);
  }

  private getBody(): UserProfileDto {
    return this.service.mockUserProfile;
  }

}
