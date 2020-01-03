import { Component, OnInit,OnDestroy  } from '@angular/core';

import {CommitService} from '../services/commit.service';
import {flatMap,pluck} from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-get-commit-list',
  templateUrl: './get-commit-list.component.html',
  styleUrls: ['./get-commit-list.component.css']
})
export class GetCommitListComponent implements OnInit {
commitList: any;
  constructor(private commitservice:CommitService) { }
  private commitUrl: string = 'https://api.github.com/repos/sonunimesh/gitcommithistory/commits';
private commitsubscription: Subscription;
  ngOnInit() {
   
    const commits=  this.commitservice.getCommit(this.commitUrl);
   
   this.commitsubscription= commits.subscribe((data)=>{
        
      if(data !== undefined)
      {
      this.commitList=data;
      }    
    } )
  }
  ngOnDestroy(){
    this.commitsubscription.unsubscribe();
  }

}
