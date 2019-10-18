import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spvmain',
  templateUrl: './spvmain.component.html',
  styleUrls: ['./spvmain.component.css']
})
export class SpvmainComponent implements OnInit {

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
  		console.log('Spvmain init...');
		this.activatedRoute.url
      		.subscribe(url => console.log('The URL changed to: ' + url));	}

	ngOnDestroy(){
  		console.log('Spvmain Destroy...');
	}

}
