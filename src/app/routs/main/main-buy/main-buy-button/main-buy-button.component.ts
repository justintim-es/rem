import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-buy-button',
  templateUrl: './main-buy-button.component.html',
  styleUrls: ['./main-buy-button.component.css']
})
export class MainBuyButtonComponent implements OnInit {
  @Input() url: string | undefined;
  @Input() price: number | undefined;
  @Input() gla: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  buy() {
    window.location.href = this.url!;
  }

}
