import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolacaoComponent } from './components/interpolacao/interpolacao.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
