import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-navigate",
  templateUrl: "navigate.html"
})
export class NavigateComponent implements OnInit {
  paginate: any = [];
  pageData: any = {};
  @Input() perPage: number;
  @Input() total: number;
  @Input() isNav: number;
  @Output() onNavigate = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {
    this.pageData["startPage"] = 0;
    this.pageData["endPage"] = 5;
    this.pageData["totalPage"] = this.total / this.perPage;
    this.pageData["currentPage"] = 1;
    this.createPaginate();
  }

  navigate(page?: number, value?: number) {
    this.pageData["currentPage"] = value;
    this.onNavigate.emit(page);
  }

  createPaginate() {
    for (let i = 0; i < this.pageData.totalPage; i++) {
      let items: any = {};
      items["value"] = i + 1;
      items["page"] = i * this.perPage;
      this.paginate.push(items);
    }
    console.log(this.paginate);
  }

  nextPage() {
    this.pageData["currentPage"] = this.pageData["currentPage"] + 1;
    // console.log("end" + this.pageData["endPage"]);
    console.log("current" + this.pageData["currentPage"]);

    if (
      this.pageData["currentPage"] % 6 === 0 &&
      this.pageData["currentPage"] < this.pageData["totalPage"]
    ) {
      this.pageData["startPage"] = this.pageData["startPage"] + 5;
      this.pageData["endPage"] = this.pageData["endPage"] + 5;
    }
    let current = this.pageData["currentPage"] * 10 - 10;
    this.onNavigate.emit(current);
  }
  prevPage() {
    this.pageData["currentPage"] = this.pageData["currentPage"] - 1;
    console.log("current" + this.pageData["currentPage"]);
    if (
      this.pageData["currentPage"] % 5 === 0 &&
      this.pageData["currentPage"] > 0
    ) {
      this.pageData["startPage"] = this.pageData["startPage"] - 5;
      this.pageData["endPage"] = this.pageData["endPage"] - 5;
      console.log("divided");
    }
    let current = this.pageData["currentPage"] * 10 - 10;
    this.onNavigate.emit(current);
  }

  show(value) {
    if (value > this.pageData.startPage && value <= this.pageData.endPage) {
      return true;
    }
  }
}
