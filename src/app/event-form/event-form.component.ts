import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../model/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  @Input() event: Event;
  constructor() { }

  ngOnInit() {
  }

  linkSanitizer() {
    if (this.event.video.includes('watch?v=')) {
      this.event.video = this.event.video.replace('watch?v=', 'embed/');
    }
  }

}
