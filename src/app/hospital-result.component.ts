import {Component} from '@angular/core';

@Component({
	selector: 'hospital-result',
	template: `
	<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 result-card">
		<md-card class="example-card">
		  <md-card-header>
		    <div md-card-avatar class="example-header-image"></div>
		    <md-card-title>Grady Memorial Hospital</md-card-title>
		    <md-card-subtitle>Atlanta, GA</md-card-subtitle>
		  </md-card-header>
		  <img md-card-image src="https://gradyhealth.org/wp-content/uploads/2017/01/grady_2color_social_200.png">
		  <md-card-content>
		    <p>
		      Rating
		      <md-icon>star</md-icon>
		      <md-icon>star</md-icon>
		      <md-icon>star</md-icon>
		      <md-icon>star_half</md-icon>
		      <md-icon>star_border</md-icon>
		    </p>
		  </md-card-content>
		  <md-card-actions>
		    <button md-button>LIKE</button>
		    <button md-button>SHARE</button>
		  </md-card-actions>
		</md-card>
	</div>
	`,
	styleUrls: ['./app.component.css','./bootstrap/dist/css/bootstrap.css']
})

export class HospitalResultComponent {
}