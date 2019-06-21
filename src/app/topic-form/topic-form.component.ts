import { Component, OnInit } from '@angular/core';
import { Topic } from '../model/topic';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.scss']
})
export class TopicFormComponent implements OnInit {

  topic: Topic;

  constructor() { }

  ngOnInit() {
    this.topic = new Topic('aze', 'azeaze', '#aze');
  }

}
