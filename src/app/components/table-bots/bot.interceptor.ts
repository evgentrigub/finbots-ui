import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { delay } from "rxjs/operators";
import { TradingBot } from "src/app/models/trading-bot.model";

/**
 * GET /bot/create
 */
@Injectable({
  providedIn: 'root'
})
export class BotInterceptor implements HttpInterceptor {
  constructor() { }

  botsArray: TradingBot[] = [
    {
      id: "1",
      ticker: "AAPL",
      createdDate: 1,
      isActive: true,
      broker: "Tinkoff",
      brokerFee: 0.03,
      strategy: "simpleTV",
      workedTime: "",
      profit: "1.2",
    },
    {
      id: "1",
      ticker: "AMD",
      createdDate: 1,
      isActive: true,
      broker: "Tinkoff",
      brokerFee: 0.03,
      strategy: "simpleTV",
      workedTime: "",
      profit: "1.2",
    }
  ]

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET' && req.url.includes('/bots')) {
      const response = new HttpResponse({
        body: this.getBody(req.body),
      });

      return of(response).pipe(delay(1000));
    }
    return next.handle(req);
  }

  private getBody(body: string): TradingBot[] {
    return this.botsArray;
  }

}