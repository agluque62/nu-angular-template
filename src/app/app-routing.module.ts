import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { SpvmainComponent } from './components/spvmain/spvmain.component';
import { SpvcfgComponent } from './components/spvcfg/spvcfg.component';
import { SpvgwsComponent } from './components/spvgws/spvgws.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService} from './services/auth-guard.service';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
	{ path: '', component: HomeComponent, canActivate: [AuthGuardService],
		children: [
			{ path: 'superv', component: SpvmainComponent, canActivate: [AuthGuardService],
				children: [
					{path: 'cfg', component: SpvcfgComponent, canActivate: [AuthGuardService]},
					{path: 'gws', component: SpvgwsComponent, canActivate: [AuthGuardService]}
				] },
			{ path: 'test1', component: TestComponentComponent, canActivate: [AuthGuardService] },	
			{ path: 'test2', component: TestComponentComponent, canActivate: [AuthGuardService] },	
			{ path: 'test3', component: TestComponentComponent, canActivate: [AuthGuardService] },	
			{ path: 'test4', component: TestComponentComponent, canActivate: [AuthGuardService] },
		], 
	},
	// { path: '', redirectTo: '/superv', pathMatch: 'full'},				// Path por defecto
	{ path: '**', component: TestComponentComponent }					// Path not Found...
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
