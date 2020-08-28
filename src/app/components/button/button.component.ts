import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() style: string;
  @Output() onClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onBtnClick(): void {
    this.onClick.emit();
  }
}
