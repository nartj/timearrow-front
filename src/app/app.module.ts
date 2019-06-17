import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule} from './material-module';

import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EventComponent } from './event/event.component';
import { TopicComponent } from './topic/topic.component';
import { TopicFormComponent } from './topic-form/topic-form.component';
import { EventFormComponent } from './event-form/event-form.component';
import { TimelineFormComponent } from './timeline-form/timeline-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EventFormContentComponent } from './event-form-content/event-form-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    EventComponent,
    TopicComponent,
    TopicFormComponent,
    EventFormComponent,
    TimelineFormComponent,
    SidebarComponent,
    EventFormContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MglTimelineModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
