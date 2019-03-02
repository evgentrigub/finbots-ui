import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

declare const TradingView: any;

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements  AfterViewInit {

  @Input() numberCard: number;

  constructor() { }

  ngAfterViewInit(): void {
    switch(this.numberCard){
      case 1:
      const tradingView = new TradingView.widget({
        'container_id': 'technical-analysis-APPL',
        'autosize': true,
        'symbol': 'NASDAQ:AAPL',
        'interval': '120',
        'timezone': 'exchange',
        'theme': 'Light',
        'style': '1',
        'toolbar_bg': '#f1f3f6',
        'withdateranges': true,
        'hide_side_toolbar': false,
        'allow_symbol_change': true,
        'save_image': false,
        'hideideas': true,
        'studies': [ 
        'MASimple@tv-basicstudies' ],
        'show_popup_button': true,
        'popup_width': '1000',
        'popup_height': '650'
      });

      case 2:
      const tradingView2 = new TradingView.widget({
        'container_id': 'technical-analysis-MSFT',
        'autosize': true,
        'symbol': 'NASDAQ:MSFT',
        'interval': '120',
        'timezone': 'exchange',
        'theme': 'Light',
        'style': '1',
        'toolbar_bg': '#f1f3f6',
        'withdateranges': true,
        'hide_side_toolbar': false,
        'allow_symbol_change': true,
        'save_image': false,
        'hideideas': true,
        'studies': [ 
        'MASimple@tv-basicstudies' ],
        'show_popup_button': true,
        'popup_width': '1000',
        'popup_height': '650'
      });
    }
  }

}
