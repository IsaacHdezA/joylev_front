import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppLoginComponent } from './views/app-login/app-login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppLoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {}