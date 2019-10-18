import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class CommServiceService {

  constructor(private config: AppConfig, private http: HttpClient) 
  {
  	console.log(config);
  }

 /** */
 private handleError(error: HttpErrorResponse) {
	  if (error.error instanceof ErrorEvent) {
	    // A client-side or network error occurred. Handle it accordingly.
	    console.error('An error occurred:', error.error.message);
	  } else {
	    // The backend returned an unsuccessful response code.
	    // The response body may contain clues as to what went wrong,
	    console.error(
	      `Backend returned code ${error.status}, ` +
	      `body was: ${error.error}`);
	  }
	  // return an observable with a user-facing error message
	  return throwError(
	    'Something bad happened; please try again later.');
	};

  /** */
  private remoteGet(url) {
  	console.log('Getting ' + this.normalizeUrl(url)); 
  	return this.http.get(this.normalizeUrl(url), 
  		{ headers: { 'Content-Type': 'application/json; charset=UTF-8' } })
  		.pipe(retry(1), catchError(this.handleError) );
  }

  /** */
  private remotePost(url, data) {
  	console.log('Postin data ', data, ' to ' + this.normalizeUrl(url)); 
  	return this.http.post(this.normalizeUrl(url), data,
  		{ headers: { 'Content-Type': 'application/json; charset=UTF-8' } })
  		.pipe(retry(1), catchError(this.handleError) );
  }

  /** */
  private normalizeUrl(url) {
  	// if (this.config.SimulatorMode == true) {
   //    return './assets/simulate' + url + '.json';
  	// }
    return url;
  }


  getTest() {
  	return this.remoteGet('/api/users');
  }

  getTest1() {
    return this.remoteGet('/api/heroes');
  }

  getTest2() {
    return this.remoteGet('/commands/config');
  }

  postTest(data) {
  	return this.remotePost('/tses1', {value:0});
  }

}
