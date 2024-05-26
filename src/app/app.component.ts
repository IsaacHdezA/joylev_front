import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAt, faKey, faUnlock } from '@fortawesome/free-solid-svg-icons';

// Material UI
import { MatCardModule } from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FontAwesomeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  atIcon = faAt;
  keyIcon = faKey;
  unlockIcon = faUnlock;

}