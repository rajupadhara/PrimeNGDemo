import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateInfoService } from './services/candidate-info.service';

import { DataTableModule, DialogModule, InputTextModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTableModule,
    DialogModule,
    InputTextModule
  ],
  providers: [CandidateInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
