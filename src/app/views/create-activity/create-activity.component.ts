import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, FormsModule } from '@angular/forms';

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
import { Activity } from '../../models/activity';
import { Image } from '../../models/image';
import { Emotion } from '../../models/emotion';

@Component({
  selector: 'app-create-activity',
  standalone: true,
  imports: [
    NgClass,
    FontAwesomeModule,

    FormsModule,
    ReactiveFormsModule,

    DatePickerComponent,
    DropdownListComponent,
    RatingComponent,
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

  activityForm: FormGroup = new FormGroup({
    title:             new FormControl(""),
    timestamp_start:   new FormControl(new Date()),
    timestamp_end:     new FormControl(new Date()),
    joy_level:         new FormControl(0),
    achievement_level: new FormControl(0),
    latitude:          new FormControl(0),
    longitude:         new FormControl(0),
    description:       new FormControl(""),
    visibility:        new FormControl(""),
    images:            new FormControl(new Set()),
    emotions:          new FormControl(new Set())
  });

  constructor() {
    this.startDate = new Date();
    this.endDate   = new Date();
  }

  ngOnInit(): void {
    this.range((Math.random() * 20) + 1);
    console.log(this.urls);
  }

  onSubmit() {
    const activity: Activity = new Activity(
      1,
      this.activityForm.value.title,
      this.activityForm.value.timestamp_start,
      this.activityForm.value.timestamp_end,
      this.activityForm.value.joy_level,
      this.activityForm.value.achievement_level,
      this.activityForm.value.latitude,
      this.activityForm.value.longitude,
      this.activityForm.value.description,
      this.activityForm.value.visibility[0].toLowerCase()
    );
    
    // TODO: Get inserted activity's id
    const insertedId: number = 1;

    const images: Image[] = [];
    const emotions: Emotion[] = [];

    this.activityForm.value.images.forEach((image: Blob) => {
      images.push(new Image(
        insertedId,
        image.toString().slice(0, 255),
        true
      ));
    });

    this.activityForm.value.emotions.forEach((emotion: Blob) => {
      emotions.push(new Emotion(
        insertedId,
        emotion.toString().slice(0, 255)
      ));
    });

    console.log(activity);
    console.log(images);
    console.log(emotions);

  }

  range(maxElems: number) {
    for(let i = 0; i < (Math.random() * maxElems) + 1; i++) this.urls.push('https://cataas.com/cat');

  }

  selectedVisibility(visibility: string) {
    this.activityForm.patchValue({ "visibility": visibility });
    console.log(this.activityForm.value.visibility);
  }

  selectedEmotion(emotion: string) {
    if(!this.emotions.has(emotion)) {
      this.emotions.add(emotion);
      this.activityForm.value["emotions"].add(emotion);
    }
  }

  selectedFile(event: Event) {
    const file = ((event.target as HTMLInputElement).files);
    if(file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.activityForm.value.images.add(reader.result?.toString());
      };

      reader.readAsDataURL(file[0]);
    }
  }

  deleteEmotion(emotion: string) {
    this.emotions.delete(emotion);
    this.activityForm.value["emotions"].delete(emotion);
  }

  deleteImage(url: string) {
    this.activityForm.value.images.delete(url);
  }
}
