import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { JobListComponent } from './job-list/job-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { JobService } from './services/job.service';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    JobListComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
