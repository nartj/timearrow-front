import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { HomeComponent } from './home';
import { TimelineFormComponent } from './timeline-form/timeline-form.component';
import { BrowseTimelinesComponent } from './browse-timelines/browse-timelines.component';
import {SidebarComponent} from './sidebar/sidebar.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

  {path: 'timeline/new', component: TimelineFormComponent},
  {path: 'timelines', component: BrowseTimelinesComponent},
  {path: 'timeline/:id', component: SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
