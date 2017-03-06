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
  			<hospital-result></hospital-result>
  			<hospital-result></hospital-result>
		</div>
  `,
  styleUrls: ['./app.component.css', './bootstrap/dist/css/bootstrap.css']
})
export class AppComponent {
  title = 'app works!';
}
