import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//Components
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

//Pipes
import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe';
import { SortPipe } from './bugTracker/pipes/sort.pipe';
import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';

//Services
import { BugOperationsService } from './bugTracker/services/BugOperations.service';
import { BugStorageService } from './bugTracker/services/BugStorage.service';


@NgModule({
  //directives, pipes, components
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    SortPipe,
    ClosedCountPipe
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],
  //services
  providers: [
    BugOperationsService,
    BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
