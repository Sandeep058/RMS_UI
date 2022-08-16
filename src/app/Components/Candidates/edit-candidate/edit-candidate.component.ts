import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from 'src/app/Model/candidate.model';
import { CandidatesService } from 'src/app/services/candidates.service';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css']
})
export class EditCandidateComponent implements OnInit {

  candidateDetails: Candidate = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    department: ''
  };

  constructor(private route: ActivatedRoute, private candidateService: CandidatesService, private router: Router) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');
        
          if(id){
            this.candidateService.getCandidate(id)
            .subscribe({
              next: (response) => {
                this.candidateDetails = response;
              }
            })
          }
        }
      })
  }

  updateCandidate(){
    this.candidateService.updateCandidate(this.candidateDetails.id, this.candidateDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['candidate']);
      }
    });
  }

  deleteCandidate(id: string){
    this.candidateService.deleteCandidate(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['candidate']);
      }
    });
  }

}
