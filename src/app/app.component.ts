import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Component({
  selector: 'time-line',
  templateUrl: './timeline/timeline.component.html',
  styleUrls: ['./timeline/timeline.component.scss']
})

export class AppComponent {
  title = 'timearrow';
}
