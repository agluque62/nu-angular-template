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
	    	(data) => console.log('Users ', data),
	    	(error)=> console.error(error)
	    	);
	  this.comm.getTest1()
	    .subscribe(
	    	(data) => console.log('Heroes', data),
	    	(error)=> console.error(error)
	    	);
	  this.comm.getTest2()
	    .subscribe(
	    	(data) => console.log('Config', data),
	    	(error)=> console.error(error)
	    	);
	 this.comm.postTest(null)
	 .subscribe(
	 		(data) => console.log('ok'),
	 		(error)=> console.error(error)
	 	);
	}
}
