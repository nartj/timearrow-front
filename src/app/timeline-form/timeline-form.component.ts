import { Component, OnInit } from '@angular/core';
import { Timeline } from '../timeline';

@Component({
  selector: 'app-timeline-form',
  templateUrl: './timeline-form.component.html',
  styleUrls: ['./timeline-form.component.scss']
})
export class TimelineFormComponent{
	submitted = false;
	onSubmit() { this.submitted = true; }

}
