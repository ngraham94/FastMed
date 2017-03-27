import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  		<md-toolbar class="toolbar primary">FastMed</md-toolbar>
  		<div class="container-fluid">
  			<md-icon class=col-lg-2 col-md-2 col-sm-2 col-xs-2>more_vert</md-icon>
  			<div col-sm-8 col-xs-8 col-lg-hidden col-md-hidden></div>
  			<search-and-settings></search-and-settings>
  			<md-icon class=col-lg-2 col-md-2 col-sm-2 col-xs-2>more_vert</md-icon>
        <div *ngIf="result">
        <hospital-result (click)="toggle_profile()"></hospital-result>
        <hospital-result (click)="toggle_profile()"></hospital-result>
        </div>
		</div>
    <div *ngIf="profile"><hospital-profile></hospital-profile></div>

  `,
  styleUrls: ['./app.component.css', './bootstrap/dist/css/bootstrap.css']
})
export class AppComponent {
  profile: boolean = false;
  result: boolean = true;
  
  toggle_profile(): void {
    if (!this.profile) {
      this.profile = true;
      this.result = false;
    } else {
      this.profile = false;
      this.result = true;
    }
  }
}
