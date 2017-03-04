import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  		<md-toolbar class="toolbar primary">FastMed</md-toolbar>
  		<div class="container-fluid">
  			<md-icon class=col-lg-2 col-md-2 col-sm-6 col-xs-6>more_vert</md-icon>
  			<search-and-settings></search-and-settings>
  			<md-icon class=col-lg-2 col-md-2 col-sm-6 col-xs-6>more_vert</md-icon>
  			<hospital-result></hospital-result>
  			<hospital-result></hospital-result>
		</div>
  `,
  styleUrls: ['./app.component.css', './bootstrap/dist/css/bootstrap.css']
})
export class AppComponent {
  title = 'app works!';
}
