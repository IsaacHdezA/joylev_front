import { Component } from '@angular/core';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,

  faPersonWalking,
  faCalendar,
  faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-activity',
  standalone: true,
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './create-activity.component.html',
  styleUrl: './create-activity.component.css'
})
export class CreateActivityComponent {
  activityIcon: IconDefinition = faPersonWalking;
  calendarIcon: IconDefinition = faCalendar;
  calendarCheckIcon: IconDefinition = faCalendarCheck;
}
