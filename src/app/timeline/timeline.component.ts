import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '../model/event';
import { EventService } from '../services/event/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  /* Configuration des options graphiques de la Timeline */
  alternate = true;
  toggle = true;
  color = false;
  // TODO: dynamic size management
  size = 40;
  expandEnabled = true;
  side = 'left';

  /* Evènement observé sur la Timeline */
  expandedIndex = -1;
  editedIndex = -2;
  sideToggled = false;
  stopPropagation = false;
  offset = 0;

  @Input() event: Event;
  @Output() eventChange = new EventEmitter<Event>();

  /* Passage du composant graphique de dessin de la sidebar */
  @Input() drawer: any;

  /* Evènements de la Timeline */
  entries: Event[] = [];

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.entries = await this.eventService.fetch(this.route.snapshot.paramMap.get('id') as any as number);
  }

  /* Fonction de tri des évènements par dates*/
  public get sortedArray(): Event[] {
    this.entries = this.entries.sort((a, b) => new Date(a.from).getTime() - new Date(b.from).getTime());
    return this.entries;
  }

  /* Trigger pour ouvrir la sidebar */
  openSideBar() {
    if (!this.drawer._opened) {
      this.drawer.toggle();
      this.sideToggled = true;
    }
  }

  /* Trigger pour fermer la sidebar */
  public async closeSideBar() {
    if (this.drawer._opened) {
      this.drawer.toggle();
      this.sideToggled = false;

      let event = this.entries[this.editedIndex];
      await this.eventService.save(event);
    }
  }

  /* Trigger d'un click sur le header d'une carte d'évènement */
  onHeaderClick(e) {
    if (this.stopPropagation) {
      e.stopPropagation();
      this.stopPropagation = false;
    }
    if (!this.expandEnabled) {
      e.stopPropagation();
    }
  }

  /* Trigger d'un click sur le point d'ancrage d'un évènement */
  onDotClick(e) {
    if (this.stopPropagation) {
      e.stopPropagation();
      this.stopPropagation = false;
    }
    if (!this.expandEnabled) {
      e.stopPropagation();
    }
  }

  onExpandEntry(expanded, index) {
    if (expanded) {
      this.expandedIndex = index;
      if (this.sideToggled) {
        this.eventChange.emit(this.entries[index]);
      }
    } else if (this.expandedIndex === index) {
      this.expandedIndex = null;
      if (this.sideToggled) {
        this.closeSideBar();
      }
    }
  }

  /* Création d'un nouvel évènement */
  unshiftEntry($event) {
    this.entries.unshift($event);
  }

  /* Trigger du click sur le bouton d'Edition d'un event */
  edit(index) {
    // si l'event est déjà en edition, close la side bar
    if (this.expandedIndex === index) {
      if (this.editedIndex === index && this.sideToggled) {
        this.closeSideBar();
        return;
      }
      this.stopPropagation = true;
    }
    // si un autre event est déjà en edition, editer le nouvel event selectionner
    if (this.expandedIndex !== index && this.sideToggled) {
      this.eventChange.emit(this.entries[index]);
      this.editedIndex = index;
    } else if (this.expandedIndex === index || !this.sideToggled) {
      this.openSideBar();
      this.eventChange.emit(this.entries[index]);
      this.editedIndex = index;
    }
  }

  /* Trigger de l'event scroll down */
  onScrollDown() {
  }
}
