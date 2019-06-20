import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '../model/event';

@Component({
  selector: 'app-event-form-content',
  templateUrl: './event-form-content.component.html',
  styleUrls: ['./event-form-content.component.scss']
})
export class EventFormContentComponent implements OnInit {

  @Input() event: Event;
  @Output() editEvent = new EventEmitter<Event>();

  constructor() { 

  }

  ngOnInit() {
  }

  onContentChange() {
    this.editEvent.emit(this.event);
  }

}
