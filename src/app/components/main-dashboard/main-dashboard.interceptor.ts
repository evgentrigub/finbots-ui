import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { delay } from "rxjs/operators";
import { InvestorTypeCharacter } from "src/app/models/enums";
import { StatsView } from "src/app/models/statistics.model";
import { HttpUtils } from "src/app/services/http-utils.service";
import { TradingBotsService } from "src/app/services/trading-bots.service";

/**
 * POST /users/stat
 */
@Injectable()
export class DashboardInterceptor implements HttpInterceptor {
  constructor(
    private httpUtils: HttpUtils,
    private tradingBotsService: TradingBotsService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET' && req.url.includes('users/stat')) {
      this.httpUtils.log(req);
      const response = new HttpResponse({
        body: this.getBody(),
      });
      return of(response).pipe(delay(1000));
    }
    return next.handle(req);
  }

  private getBody(): StatsView {
    const a =
    {
      profit: Math.round(this.tradingBotsService.mockBotsArray.reduce((a, b) => a + +b.profit, 0) / this.tradingBotsService.mockBotsArray.length * 100) / 100,
      account: 6700,
      robotQuantity: this.tradingBotsService.mockBotsArray.length,
      riskType: InvestorTypeCharacter.Guaranteed
    };
    return a;
  }
}