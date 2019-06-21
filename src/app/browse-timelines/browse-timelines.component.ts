import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-browse-timelines',
  templateUrl: './browse-timelines.component.html',
  styleUrls: ['./browse-timelines.component.scss']
})
export class BrowseTimelinesComponent implements OnInit {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

}
