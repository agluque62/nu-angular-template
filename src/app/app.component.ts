import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {Subscription } from 'rxjs';
import {filter} from 'rxjs/operators'

import * as moment from 'moment';
import * as alertify from 'alertify.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'ULISES G 5000 R.3';
  user = 'usuario';
  pagina = 1;						// TODO. Colocar en un servicio para que sea accesible desde todas las rutas...
  fechaHora = moment().format('DD/MM/YYYY, h:mm:ss a');
  myInterval;
  private redirect_subscription: Subscription;

  constructor(private router: Router) {       

    // Redirecciona a la subpagina por defecto...
    this.redirect_subscription = this.router.events
    .pipe(filter(evt => evt instanceof NavigationEnd))
    .subscribe(event => {
      if (event instanceof NavigationEnd){
        if (event.url=="/superv") {
          alertify.success('Redirect=>/superv/cfg ');              
          this.router.navigate(['/superv/cfg']);       
        }
      }

      });    
  }

  ngOnInit() {
    this.fechaHora = moment().format('DD/MM/YYYY, h:mm:ss a');
    this.myInterval = setInterval(() => {
		this.fechaHora = moment().format('DD/MM/YYYY, h:mm:ss a');
    }, 1000);
  }
  
  ngOnDestory() {
    alertify.success('Unsubscribing...');
    this.redirect_subscription.unsubscribe();
    clearInterval(this.myInterval)
  }

  Version() {
	  return '3.0.0';
  }
  
  isPageActive(pg){
	  return pg===this.pagina ? "active" : "";
  }
  
}
