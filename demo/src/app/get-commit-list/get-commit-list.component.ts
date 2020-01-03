import { Component, OnInit } from '@angular/core';

import {CommitService} from '../services/commit.service';

@Component({
  selector: 'app-get-commit-list',
  templateUrl: './get-commit-list.component.html',
  styleUrls: ['./get-commit-list.component.css']
})
export class GetCommitListComponent implements OnInit {
commitList: any;
  constructor(private commitservice:CommitService) { }
  private commitUrl: string = 'https://api.github.com/repos/sonunimesh/gitcommithistory/commits';

  ngOnInit() {
   
    const commits=  this.commitservice.getCommit(this.commitUrl);
   
    commits.subscribe((data)=>{
        
      if(data !== undefined)
      {
      this.commitList=data;
      }    
    } )
  }

}
