import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Components
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

//Pipes
import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe';
import { SortPipe } from './bugTracker/pipes/sort.pipe';
import { ElapsedPipe } from './bugTracker/pipes/elapsed.pipe';

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';

//Services
import { BugOperationsService } from './bugTracker/services/BugOperations.service';
import { BugStorageService } from './bugTracker/services/BugStorage.service';
import { BugServerService } from './bugTracker/services/BugServer.service';

@NgModule({
  //directives, pipes, components
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    SortPipe,
    ElapsedPipe,
    ClosedCountPipe
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //services
  providers: [
    BugOperationsService,
    BugStorageService,
    BugServerService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
