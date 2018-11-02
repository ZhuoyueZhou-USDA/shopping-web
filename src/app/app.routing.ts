import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';

const APP_ROUTES: Routes = [

    { path: 'component', loadChildren: './component/component.module#ComponentModule' },
];
export const Routing = RouterModule.forRoot( APP_ROUTES );