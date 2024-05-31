import { Routes } from '@angular/router';

import { AppLoginComponent } from './views/app-login/app-login.component';
import { AddActivityComponent } from './views/add-activity/add-activity.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login',           component: AppLoginComponent },
	{ path: 'create-activity', component: AddActivityComponent },
	{ path: '**',              component: AppLoginComponent }
];
