import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { CandidatesListComponent } from './Components/Candidates/candidates-list/candidates-list.component';
import { AddCandidateComponent } from './Components/Candidates/add-candidate/add-candidate.component';
import { EditCandidateComponent } from './Components/Candidates/edit-candidate/edit-candidate.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidatesListComponent,
    AddCandidateComponent,
    EditCandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
