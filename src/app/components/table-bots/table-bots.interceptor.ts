import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { delay } from "rxjs/operators";
import { HttpUtils } from "../../services/http-utils.service";
import { TradingBot } from "../../models/trading-bot.model";
import { TradingBotsService } from "../../services/trading-bots.service";

/**
 * GET /bot/create
 */
@Injectable()
export class TableBotsInterceptor implements HttpInterceptor {
  constructor(
    private service: TradingBotsService,
    private httpUtils: HttpUtils
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET' && req.url.includes('/bots')) {
      this.httpUtils.log(req);
      const response = new HttpResponse({
        body: this.getBody(),
      });
      return of(response).pipe(delay(1000));
    }

    if (req.method === 'POST' && req.url.includes('api/bots/UpdateBot')) {
      const response = new HttpResponse({
        body: this.getBody(),
      });
      return of(response).pipe(delay(1000));
    }

    if (req.method === 'POST' && req.url.includes('api/bots/DeleteBot')) {
      this.service.mockBotsArray = this.service.mockBotsArray.filter(b => b.id !== req.body.id)

      const response = new HttpResponse({
        body: this.getBody(),
      });
      return of(response).pipe(delay(1000));
    }

    return next.handle(req);
  }

  private getBody(): TradingBot[] {
    return this.service.mockBotsArray;
  }

}
