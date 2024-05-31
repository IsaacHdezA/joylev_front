import { Component } from '@angular/core';

import { DatePickerComponent } from '../../components/date-picker/date-picker.component';

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
    DatePickerComponent,
  ],
  templateUrl: './create-activity.component.html',
  styleUrl: './create-activity.component.css'
})
export class CreateActivityComponent {
  activityIcon: IconDefinition = faPersonWalking;
  calendarIcon: IconDefinition = faCalendar;
  calendarCheckIcon: IconDefinition = faCalendarCheck;

  startDate!: Date;
  endDate!: Date;

  onSubmit() {
    console.log(this.startDate);
    console.log(this.endDate);
  }
}
