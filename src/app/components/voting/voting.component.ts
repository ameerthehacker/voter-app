import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  votes: number;

  constructor() { 
    this.votes = 0;
  }

  ngOnInit() {
  }

  upVote() {
    this.votes++;
  }

  downVote() {
    if(this.votes > 0){
      this.votes--;
    }
  }

  onBtnUpVoteClicked() {
    this.upVote();
  }

  onBtnDownVoteClicked() {
    this.downVote();
  }
}
