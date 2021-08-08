import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { delay } from "rxjs/operators";
import { UserProfile } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";

/**
 * GET /profile
 */
@Injectable()
export class SettingsInterceptor implements HttpInterceptor {
  constructor(private service: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('/profile')) {

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

  private getBody(): UserProfile {
    return this.service.mockUserProfile;
  }

}