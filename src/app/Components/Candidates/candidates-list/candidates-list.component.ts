import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/Model/candidate.model';
import { CandidatesService } from 'src/app/services/candidates.service';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {

  public candidates: Candidate[] = [
    // {
    //   ID: '1',
    //   FirstName: 'Sandeep',
    //   LastName: 'Thirumurthi',
    //   Email: 'sandeepthirumurthi@gmail.com',
    //   Phone: 9944942802,
    //   Department: 'Software Developer'
    // },
    // {
    //   ID: '2',
    //   FirstName: 'Pradeep',
    //   LastName: 'Thirumurthi',
    //   Email: 'pradeepthirumurthi@gmail.com',
    //   Phone: 9944942802,
    //   Department: 'Software Developer'
    // },
    // {
    //   ID: '3',
    //   FirstName: 'Sandeep',
    //   LastName: 'Thirumurthi',
    //   Email: 'sandeepthirumurthi@gmail.com',
    //   Phone: 9944942802,
    //   Department: 'Software Developer'
    // }
  ];

  constructor(private candidateService: CandidatesService) { }

  ngOnInit(): void {
    this.candidateService.getallCandidates()
    .subscribe({
      next: (candidates) => {
        this.candidates = candidates;
        console.log(candidates);
      },
      error: (response) => {
        console.log(response);
      }
    })
    
  }

}
