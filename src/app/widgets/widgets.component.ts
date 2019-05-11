import { Component, OnInit, Input, AfterViewInit } from '@angular/core';


declare const TradingView: any;

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements  AfterViewInit {

  @Input() index: string;
  @Input() ticker: string;
  

  constructor() { }

  ngAfterViewInit(): void {
    const tradingView = new TradingView.widget({
          'container_id': 'technical-analysis-'+this.ticker,
          'autosize': true,
          'symbol': this.index+':'+this.ticker,
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
