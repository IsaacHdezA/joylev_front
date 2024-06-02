import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { DatePickerComponent } from '../../components/date-picker/date-picker.component';
import { DropdownListComponent } from '../../components/dropdown-list/dropdown-list.component';
import { RatingComponent } from '../../components/rating/rating.component';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,

  faPersonWalking,
  faCalendar,
  faCalendarCheck,
  faTrash,
  faCirclePlus,
  faXmark
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-activity',
  standalone: true,
  imports: [
    NgClass,
    FontAwesomeModule,

    DatePickerComponent,
    DropdownListComponent,
    RatingComponent
  ],
  templateUrl: './create-activity.component.html',
  styleUrl: './create-activity.component.css'
})
export class CreateActivityComponent implements OnInit {
  activityIcon: IconDefinition = faPersonWalking;
  calendarIcon: IconDefinition = faCalendar;
  calendarCheckIcon: IconDefinition = faCalendarCheck;
  trashIcon: IconDefinition = faTrash;

  circlePlusIcon: IconDefinition = faCirclePlus;
  xMarkIcon: IconDefinition = faXmark;

  startDate!: Date;
  endDate!: Date;
  emotions: Set<string> = new Set();

  privacyOptions: string[] = [
    "Público",
    "Privado",
    "Amigos",
  ];
  emotionOptions: string[] = [
    "Felicidad",
    "Tristeza",
    "Enojo"
  ];

  cat_tags: string[] = [
    "multicolored", "multiple", "multiple_colors", "munchkin", "müde", "nader", "nails", "nasty",
    "nature", "near", "needy", "nelly", "nelut", "network", "new year", "newyear", "nicecat",
    "night", "no", "nope", "norwegian", "norwegian forest cat", "nose", "nyan", "nyancat",
    "nyancat-gif", "obese", "ocean", "office", "old", "omg", "ominous", "on back", "one sock",
    "ooooo", "open", "open_mouth", "orange", "orange cat", "outdoor", "outside", "ovni", "pain",
    "pair", "pancakes", "parents", "party", "pastic", "patoka", "paw", "paws",
  ];
  urls: string[] = [];

  constructor() {
    this.startDate = new Date();
    this.endDate   = new Date();
  }

  ngOnInit(): void {
    this.range((Math.random() * 20) + 1);
    console.log(this.urls);
  }

  onSubmit() {
    console.log(this.startDate);
    console.log(this.endDate);
  }

  range(maxElems: number) {
    for(let i = 0; i < (Math.random() * maxElems) + 1; i++) this.urls.push('https://cataas.com/cat');

  }

  selectedEmotion(emotion: string) {
    if(!this.emotions.has(emotion)) this.emotions.add(emotion);
  }

  deleteEmotion(emotion: string) {
    this.emotions.delete(emotion);
  }
}
