import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { MatDialogModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './routing/routing.module';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { StatusMessageComponent } from './status-message/status-message.component';
import { ActorComponent } from './actor/actor.component';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { AwardFormComponent } from './award-form/award-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MovieComponent,
    HomeComponent,
    DeleteConfirmComponent,
    MovieFormComponent,
    StatusMessageComponent,
    ActorComponent,
    ActorFormComponent,
    AwardFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [DeleteConfirmComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
