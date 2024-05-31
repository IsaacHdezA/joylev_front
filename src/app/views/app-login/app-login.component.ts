import { Component } from '@angular/core';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAt,
  faKey,
  faUnlock,
  faArrowLeft,
  faUser,
  faRepeat,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-app-login',
  standalone: true,
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './app-login.component.html',
  styleUrl: './app-login.component.css'
})
export class AppLoginComponent {
  atIcon: IconDefinition = faAt;
  keyIcon: IconDefinition = faKey;
  unlockIcon: IconDefinition = faUnlock;
  arrowLeftIcon: IconDefinition = faArrowLeft;
  userIcon: IconDefinition = faUser;
  repeatIcon: IconDefinition = faRepeat;
  logIcon: IconDefinition = faRightToBracket;

  register: boolean = false;

  toggleRegister() {
    this.register = !this.register;
  }
}
