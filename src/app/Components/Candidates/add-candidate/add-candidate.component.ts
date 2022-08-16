import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/Model/candidate.model';
import { CandidatesService } from 'src/app/services/candidates.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  addCandidateRequest: Candidate = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    department: ''
  }

  constructor(private candidateService: CandidatesService, private router: Router) { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.addCandidateRequest.resume = event.target.files[0];
}

  addCandidate(){
    // console.log(this.addCandidateRequest);
    this.candidateService.AddCandidates(this.addCandidateRequest)
    .subscribe({
      next: (candidate) => {
        // console.log(candidate);
        this.router.navigate(['candidate']);
      }
    });
  }

}
