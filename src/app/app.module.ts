import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './components/candidate-detail/candidate-detail.component';
import { FavouriteInfoComponent } from './components/favourite-info/favourite-info.component';
import { CandidateInfoService } from './services/candidate-info.service';

import { DataTableModule, SharedModule, DialogModule, ButtonModule,
  PanelModule, InputTextModule, CalendarModule, SelectButtonModule,
  DropdownModule, ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';



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
    HttpClientModule,
    FormsModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    ConfirmDialogModule

  ],
  providers: [CandidateInfoService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
