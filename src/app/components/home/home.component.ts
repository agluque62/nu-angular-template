import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
        private router: Router,
        private authenticationService: AuthenticationService 
    ) { }

  ngOnInit() {
        this.router.navigate(['/superv']);
  }

    logout() {
        this.authenticationService.logout();
        // this.router.navigate(['/login']);
    } 

}
