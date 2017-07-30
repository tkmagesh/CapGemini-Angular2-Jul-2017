import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { UtilsModule } from './utils/utils.module';

//Components
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/bugStats/BugStats.component';

//Pipes

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';

//Services
import { BugOperationsService } from './bugTracker/services/BugOperations.service';
import { BugStorageService } from './bugTracker/services/BugStorage.service';
import { BugServerService } from './bugTracker/services/BugServer.service';
import { BugEditComponent } from './bugTracker/bugEdit/BugEdit.component';
import { BugDetailsComponent } from './bugTracker/bugDetails/BugDetails.component';

const routes : Routes = [
    {path : '', redirectTo : '/bugs', pathMatch : 'full'},
    {path : 'add', component : BugEditComponent},
    {path : 'details/:id', component : BugDetailsComponent},
    {path : 'bugs', component : BugTrackerComponent}
]

@NgModule({
  //directives, pipes, components
  declarations: [
    AppComponent,
    BugTrackerComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent,
    BugDetailsComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilsModule,
    RouterModule.forRoot(routes)
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
