import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  constructor(
    private leaderService: LeaderService,
    @Inject('baseURL') private baseURL
  ) { }

  ngOnInit(): void {
    this.leaderService.getLeaders()
      .subscribe(leaders => this.leaders = leaders);
  }

}
