import { Component, OnInit } from '@angular/core';
import { Timeline } from '../model/timeline';
import { FormControl} from '@angular/forms';
import { Topic } from '../model/topic';

@Component({
  selector: 'app-timeline-form',
  templateUrl: './timeline-form.component.html',
  styleUrls: ['./timeline-form.component.scss']
})
export class TimelineFormComponent  implements OnInit {
  timeline: Timeline;
  topics = new FormControl();

  constructor() { }

  ngOnInit() {
    /* Topics repo mock */
    this.timeline = new Timeline('', '', '', '', null, null, null);
    this.timeline.topics = [new Topic('code1', 'lib1', ''), new Topic('code2', 'lib2', '')];
  }
}
