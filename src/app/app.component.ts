import { Component, Input, DoCheck } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<button (click)="onChange">change</button>
            <br>
            <app-child [data]="data" />
            `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';

  data = { name: 'ss' }
  change() {}
}
