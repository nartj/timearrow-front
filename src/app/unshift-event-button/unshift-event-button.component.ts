import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from '../model/event';

@Component({
  selector: 'app-unshift-event-button',
  templateUrl: './unshift-event-button.component.html',
  styleUrls: ['./unshift-event-button.component.scss']
})
export class UnshiftEventButtonComponent implements OnInit {

  @Output() unshiftEntry = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  /* Emettre le nouvel évènement à la Timeline*/
  unshiftTLEntry() {
    this.unshiftEntry.emit(new Event('Titre de l\'évènement', '', '', '', ''));
  }


}
