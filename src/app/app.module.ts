import { NavigateComponent } from "./user-list/navigate/navigate.component";
import { UserDialogComponent } from "./user-list/dialog/user-dialog.component";
import { MaterialModule } from "./material.module";
import { ApiService } from "./services/api.service";
import { UserListComponent } from "./user-list/user-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
const appRoutes: Routes = [
  {
    path: "users",
    component: UserListComponent
  },
  {
    path: "",
    redirectTo: "users",
    pathMatch: "full"
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDialogComponent,
    NavigateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  entryComponents: [UserDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
