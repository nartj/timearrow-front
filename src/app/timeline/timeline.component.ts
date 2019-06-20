import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Event} from '../model/event';


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
  /* */

  /* Evènement observé sur la Timeline */
  expandedIndex = -1;
  editedIndex = -2;
  sideToggled = false;
  stopPropagation = false;

  /* Passage de l'évènement à éditer à la Sidebar */
  @Output() eventToEdit = new EventEmitter<Event>();

  /* Passage du composant graphique de dessin de la sidebar */
  @Input() drawer: any;

  /* Evènements de la Timeline */
  entries = [new Event('Invention du TypeScript',
    'TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d\'améliorer et de ' +
    'sécuriser la production de code JavaScript. C\'est un sur-ensemble de JavaScript (c\'est-à-dire que tout code JavaScript correct ' +
    'peut être utilisé avec TypeScript). Le code TypeScript est transcompilé en JavaScript, pouvant ainsi être interprété par n\'importe ' +
    'quel navigateur web ou moteur JavaScript. Il a été cocréé par Anders Hejlsberg, principal inventeur de C#.',
    'https://blog.cellenza.com/wp-content/uploads/2018/10/1-mn6bOs7s6Qbao15PMNRyOA-300x300.png',
    'https://www.youtube.com/embed/n6RoVyZEsv4', 'content')];

  constructor() { }

  ngOnInit() {
  }

  /* Fonction de tri des évènements par dates*/
  public get sortedArray(): Event[] {
    this.entries = this.entries.sort((a, b) => new Date(a.beginDate).getTime() - new Date(b.beginDate).getTime());
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
  closeSideBar() {
    if (this.drawer._opened) {
      this.drawer.toggle();
      this.sideToggled = false;
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
        this.eventToEdit.emit(this.entries[index]);
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
      this.eventToEdit.emit(this.entries[index]);
      this.editedIndex = index;
    } else if (this.expandedIndex === index || !this.sideToggled) {
      this.openSideBar();
      this.eventToEdit.emit(this.entries[index]);
      this.editedIndex = index;
    }
  }
}
