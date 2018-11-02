import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { Routing } from './app.routing';
import { ComponentModule } from './component/component.module';
// import { AboutusComponent } from './component/aboutus/aboutus.component';
// import { IcecreamComponent } from './component/icecream/icecream.component';
// import { DessertComponent } from './component/dessert/dessert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
      BrowserModule,
      Routing,
      ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
