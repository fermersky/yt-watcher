import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <main class="app-main">
      <ng-content></ng-content>
    </main>
  `,
  styles: [
    `
      .app-main {
        display: grid;
        grid-template-columns: 1fr 3fr;
      }
    `,
  ],
})
export class PageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
