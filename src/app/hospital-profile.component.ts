import { Component, Input } from '@angular/core';
import { Hospital } from './hospital';

@Component({
	selector: 'hospital-profile',

	template: `
	<div style="padding-bottom:10px">
		<div class="container-fluid profile">
    		<div class="row profile_content">
      			<h2>{{hospital.name}}</h2>
        		
        		<img class="col-xs-12 col-md-8" src='http://emorywheel.com/wp-content/uploads/2015/06/emory-hospital-bs-1200xx4256-2394-0-219.jpg'>
        		
        		<div class="col-xs-12 col-md-4">
        			<div class="info">
        				<span>[{{hospital.score}}][{{hospital.distance}} mi][{{hospital.address}}]</span>
        				<button class="submit" style="float: right">Fill out form</button>
        			</div>
        			<div class="info">
        				<span>[{{hospital.phone}}]</span>
        			</div>
        			<div class="info">
        				<span>Description</span>
        				<div class="descr">{{hospital.description}}</div>
        			</div>
        			<div class="info">
        				<span>Reviews [number of reviews]</span>
        			</div>
      			</div>
      		</div>
    	</div>
    </div>
	`,
	styleUrls: ['./app.component.css','./bootstrap/dist/css/bootstrap.css'],
	styles: [`

		.profile {
			max-width: 800px;
			background-color: white;
			box-shadow: 3px 7px 20px #32596E;
			margin: auto;
			border-radius: 5px;
		}

		.profile_content {
			color: #7d8084;
			padding-top: 1px;
			margin-left: 10px;
			margin-right: 10px;

		}

		.profile_content img {
			border-style: solid;
			width: 100%;
			margin-bottom: 10px;
			border-width: 3px;
		}

		.info {
			padding-top: 16px;
			padding-bottom: 16px;
			border-radius: 4px;
		}

		.info span {
			border-bottom-style: solid;
			border-width: 2px;
		}

		.descr {
			padding-top: 10px;
		}

		.info div {
			padding-left: 5px;
		}

		.submit {
			cursor: pointer;
			color: white;
			background-color: #FF8052;
			border-style: solid;
			border-color: #D9E4FF;
			padding-left: 30px;
			padding-right: 30px;
			padding-top: 4px;
			padding-bottom: 4px;
			border-radius: 4px;
		}

		.submit:hover {
			background-color: #FF9A75;
		}

	`]

})

export class HospitalProfileComponent {
	@Input() hospital: Hospital = new Hospital();

	submit(): void {
	}
}