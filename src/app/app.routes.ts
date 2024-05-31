import { Routes } from '@angular/router';

import { AppLoginComponent } from './views/app-login/app-login.component';
import { CreateActivityComponent } from './views/create-activity/create-activity.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login',           component: AppLoginComponent },
	{ path: 'create-activity', component: CreateActivityComponent },
	{ path: '**',              component: AppLoginComponent }
];
