import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClickedOutsideDirective } from '../../directives/clicked-outside.directive';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition, 
  faCalendar,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'date-picker',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgClass,
    FormsModule,
    FontAwesomeModule,

    ClickedOutsideDirective
  ],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent implements OnInit {
  @Input() placeholder: string = "";
  @Input() required: boolean = false;

  @Input() ngModel!: Date;
  @Output() ngModelChange: EventEmitter<Date> = new EventEmitter<Date>();

  calendarIcon: IconDefinition = faCalendar;
  prevIcon: IconDefinition = faChevronLeft;
  nextIcon: IconDefinition = faChevronRight;

  MONTH_NAMES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agusto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  DAYS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  showDatepicker: boolean = false;
  selectedDate!: Date;

  parsedDate!: string;
  month: number = -1;
  year: number = -1;
  monthDays: number[] = [];
  blankdays: number[] = [];
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  constructor(){}

  ngOnInit(): void { this.initDate(); }

  initDate() {
    let today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();

    this.getNoOfDays()
  }

  isToday(date: number) {
    const today = new Date();
    const d = new Date(this.year, this.month, date);

    return today.toDateString() === d.toDateString();
  }

  isDateSelected(date: number) {
    const d = new Date(this.year, this.month, date);

    return this.ngModel.toDateString() === d.toDateString();
  }

  getDateValue(date: number) {
    let selectedDate = new Date(this.year, this.month, date);

    this.ngModelChange.emit(selectedDate);
    this.parseDate(selectedDate);

    this.showDatepicker = false;
  }

  getNoOfDays() {
    let daysInMonth = new Date(this.year, this.month + 1, 0).getDate();

    let dayOfWeek = new Date(this.year, this.month).getDay();
    let blankdaysArray = [];

    for(var i = 1; i <= dayOfWeek; i++) blankdaysArray.push(i);

    let daysArray = [];
    for(var i = 1; i <= daysInMonth; i++) daysArray.push(i);

    this.blankdays = blankdaysArray;
    this.monthDays = daysArray;
  }

  parseDate(date: Date): void {
    const timestampPattern: RegExp = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/;
    const dateParts: RegExpMatchArray = date.toISOString().match(timestampPattern) as RegExpMatchArray;

    this.parsedDate = dateParts.slice(1, 4).reverse().join("/") + " " + dateParts.slice(4).join(":");
  }

  closePicker() {
    this.showDatepicker = false;
  }
}
