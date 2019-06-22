import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from '../model/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  @Input() event: Event;
  @Output() eventChange = new EventEmitter<Event>();
  constructor() { }

  ngOnInit() {
  }

  linkSanitizer() {
    if (this.event.video && this.event.video.includes('watch?v=')) {
      this.event.video = this.event.video.replace('watch?v=', 'embed/');
    }
  }

}
