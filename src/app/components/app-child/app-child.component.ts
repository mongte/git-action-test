import { Component, DoCheck, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.scss']
})
export class AppChildComponent implements OnInit, DoCheck {
  @Input()
  data: any

  constructor() {

  }

  ngOnInit(): void {
  }

  public ngDoCheck() {
  }
}
