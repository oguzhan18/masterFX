import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const TradingView: any;

@Component({
  selector: 'masterfx-tradingview',
  templateUrl: './tradingview.component.html',
  styleUrls: ['./tradingview.component.scss']
})
export class TradingviewComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    new TradingView.widget(
      {
        width: '100%',
        height: '100%',
        symbol: 'TRY/USD',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'tr',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        save_image: true,
        container_id: 'tradingview_f1799'
      }
    );
  }
}
