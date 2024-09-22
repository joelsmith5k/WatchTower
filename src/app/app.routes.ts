import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { HockeyMainComponent } from './modules/hockey/hockey-main/hockey-main.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'hockey', component: HockeyMainComponent }
];
