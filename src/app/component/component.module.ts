import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { IcecreamComponent } from './icecream/icecream.component';
import { DessertComponent } from './dessert/dessert.component';
export const routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'icecream', component: IcecreamComponent },
    { path: 'dessert', component: DessertComponent },
    { path: 'aboutus', component: AboutusComponent }
    ];
@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
  ],
  declarations: [HomeComponent, AboutusComponent, IcecreamComponent, DessertComponent]
})
export class ComponentModule { }
