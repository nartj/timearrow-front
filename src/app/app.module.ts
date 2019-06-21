import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { TimelineFormComponent } from './timeline-form/timeline-form.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TopicComponent } from './topic/topic.component';
import { EventComponent } from './event/event.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventFormContentComponent } from './event-form-content/event-form-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from './material.module';
import { ScrollEventModule } from 'ngx-scroll-event';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TooltipModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxEditorModule } from 'ngx-editor';
import { UnshiftEventButtonComponent } from './unshift-event-button/unshift-event-button.component';
import { SafePipe } from './helper/url-safe.pipe';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { BrowseTimelinesComponent } from './browse-timelines/browse-timelines.component';
import { TopicFormComponent } from './topic-form/topic-form.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimelineComponent,
    TopicComponent,
    EventComponent,
    EventFormComponent,
    EventFormContentComponent,
    SidebarComponent,
    TimelineFormComponent,
    UnshiftEventButtonComponent,
    SafePipe,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    BrowseTimelinesComponent,
    TopicFormComponent
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
    MaterialModule,
    NgxEditorModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    ScrollEventModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
