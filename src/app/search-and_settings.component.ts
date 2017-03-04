import {Component} from '@angular/core';

@Component({
	selector: 'search-and-settings',
	template: `

		<md-input-container class="col-lg-8 col-md-8 col-sm-12 col-sm-12">
      		<textarea mdInput placeholder="Search Hospitals"></textarea>
    	</md-input-container>
	`,
	styleUrls: ['./app.component.css','./bootstrap/dist/css/bootstrap.css']
})

export class SearchSettingsComponent {}