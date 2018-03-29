import { ApiService } from "./../../services/api.service";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
@Component({
  templateUrl: "dialog.html"
})
export class UserDialogComponent implements OnInit {
  user: Object = {};
  loading: boolean;
  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    console.log(this.data);
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.loading = true;
    let name: any = {};
    name = this.data["name"];
    this.apiService.getData("users/" + name, {}).subscribe(res => {
      console.log(res);
      if (res) {
        this.user = res;
        this.loading = false;
      }
    });
  }
}
