import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './components/candidate-detail/candidate-detail.component';
import { CandidateInfoService } from './services/candidate-info.service';

import { DataTableModule, SharedModule, DialogModule, ButtonModule,
  PanelModule, InputTextModule, CalendarModule } from 'primeng/primeng';
import { FavouriteInfoComponent } from './components/favourite-info/favourite-info.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    CandidateDetailComponent,
    FavouriteInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    CalendarModule
  ],
  providers: [CandidateInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
