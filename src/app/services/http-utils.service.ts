import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpUtils {
  public log(req: HttpRequest<any>): void {
    if (req.body) {
      console.log(
        `${req.method} \n\n ${req.urlWithParams} \n\n ${JSON.stringify(req.body, null, 2)}`,
      );
    } else {
      console.log(`${req.method} \n\n ${req.urlWithParams}`);
    }
  }
}
