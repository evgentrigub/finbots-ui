import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { delay } from "rxjs/operators";
import { TradingBot } from "../../models/trading-bot.model";
import { TradingBotsService } from "../../services/trading-bots.service";

/**
 * GET /bot/create
 */
@Injectable()
export class TableBotsInterceptor implements HttpInterceptor {
  constructor(private service: TradingBotsService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET' && req.url.includes('/bots')) {
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