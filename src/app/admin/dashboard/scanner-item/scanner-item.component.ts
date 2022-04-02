import { Component, Input, OnInit } from '@angular/core';

import { TradeType } from '../../../core/enums';

@Component({
  selector: 'masterfx-scanner-item',
  templateUrl: './scanner-item.component.html',
  styleUrls: ['./scanner-item.component.scss']
})
export class ScannerItemComponent implements OnInit {
  @Input() value: number;
  @Input() type: TradeType;

  TradeType = TradeType;

  constructor() { }

  ngOnInit(): void {
  }

}
