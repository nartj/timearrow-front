import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Event} from '../model/event';

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
