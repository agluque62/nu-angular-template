import { Component, OnInit } from '@angular/core';
import { CommServiceService } from '../../services/comm-service.service';

@Component({
  selector: 'app-spvgws',
  templateUrl: './spvgws.component.html',
  styleUrls: ['./spvgws.component.css']
})
export class SpvgwsComponent implements OnInit {

  constructor(private comm: CommServiceService) { }

  ngOnInit() {
  	this.test();
  }

  private test() {
	  this.comm.getTest()
	    .subscribe(
	    	(data) => console.log(data),
	    	(error)=> console.error(error)
	    	);
	 this.comm.postTest(null)
	 .subscribe(
	 		(data) => console.log('ok'),
	 		(error)=> console.error(error)
	 	);
	}
}
