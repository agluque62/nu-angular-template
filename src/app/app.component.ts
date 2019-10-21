import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {Subscription } from 'rxjs';
import {filter} from 'rxjs/operators'

import * as moment from 'moment';
import * as alertify from 'alertify.js';
import {TranslateService} from '@ngx-translate/core';

import {CommServiceService} from './services/comm-service.service';
import {AuthenticationService} from './services/authentication.service';

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
  private user_subscription: Subscription;

  constructor(
    private translate: TranslateService,
    private router: Router, 
    private comm: CommServiceService,
    private auth: AuthenticationService) {       

    translate.get('ULISES G 5000 R3').subscribe(
      val=>{
        this.title=val;
        console.log('Primera traduccion del servicio');
      }, 
      ()=>{
        console.error("Translate error");
      });

    // this.title = this.translate.instant('ULISES G 5000 R3');

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
    this.user_subscription = auth.currentUser.subscribe(
      usr => this.user = usr ? usr.username : "");
  }

  ngOnInit() {
    this.fechaHora = moment().format('DD/MM/YYYY, h:mm:ss a');
    this.myInterval = setInterval(() => {
		this.fechaHora = moment().format('DD/MM/YYYY, h:mm:ss a');    
    }, 1000);
  }
  
  ngOnDestory() {
    alertify.success(this.translate.get('Unsubscribing'));
    this.redirect_subscription.unsubscribe();
    this.user_subscription.unsubscribe();
    clearInterval(this.myInterval)
  }

  Version() {
	  return '3.0.0';
  }
  
  isPageActive(pg){
	  return pg===this.pagina ? "active" : "";
  }
  
}
