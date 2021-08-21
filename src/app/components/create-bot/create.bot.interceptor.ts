import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { delay } from "rxjs/operators";
import { HttpUtils } from "../../services/http-utils.service";

/**
 * POST /bot/create
 */
@Injectable()
export class CreateBotInterceptor implements HttpInterceptor {
  constructor(
    private httpUtils: HttpUtils
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'POST' && req.url.includes('/bot/create')) {
      this.httpUtils.log(req);
      const response = new HttpResponse({
        body: this.getBody(),
      });

      return of(response).pipe(delay(1000));
    }
    return next.handle(req);
  }

  private getBody(): string {
    return 'success';
  }
}