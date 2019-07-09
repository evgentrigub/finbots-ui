import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const TradingView: any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit, AfterViewInit {
  ngAfterViewInit() {
    // const tradingView =  new TradingView.widget({
    //    'container_id': 'technical-analysis',
    //    'autosize': true,
    //    'symbol': 'NASDAQ:AAPL',
    //    'interval': '120',
    //    'timezone': 'exchange',
    //    'theme': 'Light',
    //    'style': '1',
    //    'toolbar_bg': '#f1f3f6',
    //    'withdateranges': true,
    //    'hide_side_toolbar': false,
    //    'allow_symbol_change': true,
    //    'save_image': false,
    //    'hideideas': true,
    //    'studies': [
    //    'MASimple@tv-basicstudies' ],
    //    'show_popup_button': true,
    //    'popup_width': '1000',
    //    'popup_height': '650'
    //  });
  }

  constructor() {}

  ngOnInit() {}
}
