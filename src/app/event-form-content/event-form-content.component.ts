import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../model/event';

@Component({
  selector: 'app-event-form-content',
  templateUrl: './event-form-content.component.html',
  styleUrls: ['./event-form-content.component.scss']
})
export class EventFormContentComponent implements OnInit {

  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

}
