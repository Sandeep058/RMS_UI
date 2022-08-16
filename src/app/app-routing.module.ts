import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidateComponent } from './Components/Candidates/add-candidate/add-candidate.component';
import { CandidatesListComponent } from './Components/Candidates/candidates-list/candidates-list.component';
import { EditCandidateComponent } from './Components/Candidates/edit-candidate/edit-candidate.component';


const routes: Routes = [
  { path: '', component: CandidatesListComponent},
  { path: 'candidate', component: CandidatesListComponent},
  { path: 'candidate/add', component: AddCandidateComponent},
  { path: 'candidate/edit/:id', component: EditCandidateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
