import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/serever.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning-alert/warning.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { TestComponent } from './test/test.component';
import { AssignmentDatabindComponent } from './assignment-databind/assignment-databind.component';
import { AssignmentDirectivesComponent } from './assignment-directives/assignment-directives.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessAlertComponent,
    TestComponent,
    AssignmentDatabindComponent,
    AssignmentDirectivesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
