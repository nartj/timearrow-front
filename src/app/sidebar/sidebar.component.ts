import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Event} from '../model/event';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showFiller = false;
  currentEvent: Event = new Event(null, '', '', '', '', '', this.route.snapshot.paramMap.get('id') as any as number);

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
}
