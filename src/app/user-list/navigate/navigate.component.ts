import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-navigate",
  templateUrl: "navigate.html"
})
export class NavigateComponent implements OnInit {
  @Input() isNav: number;
  @Output() onNavigate = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  navigate(type: string) {
    this.onNavigate.emit(type);
  }
}
