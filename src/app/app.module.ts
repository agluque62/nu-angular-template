import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { SpvmainComponent } from './components/spvmain/spvmain.component';
import { SpvcfgComponent } from './components/spvcfg/spvcfg.component';
import { SpvgwsComponent } from './components/spvgws/spvgws.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    SpvmainComponent,
    SpvcfgComponent,
    SpvgwsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
