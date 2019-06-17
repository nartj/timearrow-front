import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timearrow';
  alternate = true;
  toggle = true;
  color = false;
  size = 40;
  expandEnabled = true;
  side = 'left';

  entries = [
    {
      header: 'header',
      content: 'content'
    }
  ];

  addEntry() {
    this.entries.push({
      header: 'header',
      content: 'content'
    });
  }

  removeEntry() {
    this.entries.pop();
  }

  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`);
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }
}
