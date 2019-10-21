import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RequestInfo } from 'angular-in-memory-web-api/interfaces'

@Injectable({
  providedIn: 'root'
})
export class SimulateBackendService implements InMemoryDbService {

  	/** Tabla de Usuarios */
    private localUsers = [
      { id: 1, username: '1', password: '1', firstName: 'User1', lastName: 'User1',token:'tk-user-1' },
      { id: 2, username: '2', password: '2', firstName: 'User2', lastName:'User2',token:'tk-user-2' },
    ];

  constructor() { }
 
   createDb() {
   		let users = this.localUsers;
	    let heroes = [
	      { id: 1, name: 'Windstorm' },
	      { id: 2, name: 'Bombasto' },
	      { id: 3, name: 'Magneta' },
	      { id: 4, name: 'Tornado' }
	    ];
        console.log('SimulateBackend createDb...');
    	return {heroes, users};
	}

    /** Intercepto los GET para fichero locales  */
    get(reqInfo: RequestInfo) {
         return undefined;            // No action..   
    }

	/** Intercepta los POST para autentificacion */
	post(reqInfo: RequestInfo) {        
        if (reqInfo.url.endsWith('/authenticate'))
            return this.authenticate(reqInfo);
        console.log('SimulateBackendService POST Intercept', reqInfo);
        return undefined
    }

    private authenticate(reqInfo: RequestInfo) {
    
        // return an Observable response
        console.log('HTTP POST api/authentication override')

        const { headers, url, req } = reqInfo

        // if request username and passord are correct
        //  return response with a JSONWebToken
        const { username, password } = req['body']
        const user = this.localUsers.find(x => x.username === username && x.password === password);

        if (!user) return unauthorized();
        return ok({
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: 'fake-jwt-token'
        });

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }
    }

  }

