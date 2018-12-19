import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CapitalizadoPipe } from './pipes/capitalizado.pipes';
import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { from } from 'rxjs';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,CapitalizadoPipe, DomseguroPipe, PasswordPipe
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [ 
    { provide : LOCALE_ID, useValue: "es-MX" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
