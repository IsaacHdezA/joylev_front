import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ClickedOutsideDirective } from '../../directives/clicked-outside.directive';
import { FormsModule } from '@angular/forms';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,

  faCaretDown,
  faGlobe,
  faEye
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dropdown-list',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ClickedOutsideDirective,
    FormsModule
  ],
  templateUrl: './dropdown-list.component.html',
  styleUrl: './dropdown-list.component.css'
})
export class DropdownListComponent {
  @Input() ngModel: string = "";
  @Output() ngModelChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() placeholder: string = "";
  @Input() items: string[] = [];

  caretIcon: IconDefinition = faCaretDown;
  globeIcon: IconDefinition = faGlobe;
  eyeIcon: IconDefinition = faEye;

  showItems: boolean = false;

  selectedItem: string = "";

  selectItem(item: string) {
    this.selectedItem = item;
    this.ngModelChange.emit(item);

    this.showItems = false;
  }

  closeItems() {
    this.showItems = false;
  }
}
