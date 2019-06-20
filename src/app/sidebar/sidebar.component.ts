import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Event} from '../model/event';
import { EventFormComponent } from '../event-form/event-form.component';
import { EventFormContentComponent } from '../event-form-content/event-form-content.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showFiller = false;
  currentEvent: Event = new Event('', '', '', '', '');
  constructor() { }

  ngOnInit() {
  }

  editSelectedEvent($event) {
    this.currentEvent = $event;
  }
}
