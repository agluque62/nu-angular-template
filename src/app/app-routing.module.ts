import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { SpvmainComponent } from './components/spvmain/spvmain.component';
import { SpvcfgComponent } from './components/spvcfg/spvcfg.component';
import { SpvgwsComponent } from './components/spvgws/spvgws.component';


const routes: Routes = [
	{ path: 'superv', component: SpvmainComponent, data: {pagina: 0 },
		children: [
			{path: 'cfg', component: SpvcfgComponent},
			{path: 'gws', component: SpvgwsComponent}
		] },
	{ path: 'test1', component: TestComponentComponent, data: {pagina: 1 } },	
	{ path: 'test2', component: TestComponentComponent, data: {pagina: 2 } },	
	{ path: 'test3', component: TestComponentComponent, data: {pagina: 3 } },	
	{ path: 'test4', component: TestComponentComponent, data: {pagina: 4 } },
	{ path: '', redirectTo: '/superv', pathMatch: 'full'},				// Path por defecto
	{ path: '**', component: TestComponentComponent }					// Path not Found...
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
