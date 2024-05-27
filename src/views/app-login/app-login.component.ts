import { Component } from '@angular/core';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAt,
  faKey,
  faUnlock,
  IconDefinition,
  faArrowLeft,
  faUser,
  faRightToBracket,
  faRepeat,
} from '@fortawesome/free-solid-svg-icons';

// PrimeNg
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FontAwesomeModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule
  ],
  templateUrl: './app-login.component.html',
  styleUrl: './app-login.component.css'
})
export class AppLoginComponent {
  atIcon: IconDefinition        = faAt;
  keyIcon: IconDefinition       = faKey;
  unlockIcon: IconDefinition    = faUnlock;
  arrowLeftIcon: IconDefinition = faArrowLeft;
  userIcon: IconDefinition      = faUser;
  logIcon: IconDefinition       = faRightToBracket;
  repeatIcon: IconDefinition    = faRepeat;

  register: boolean = true;
  toggleRegister() { this.register = !this.register; }
}
