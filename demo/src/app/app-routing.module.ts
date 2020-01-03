import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetCommitListComponent } from './get-commit-list/get-commit-list.component';

const routes: Routes = [
  {path:'',redirectTo:"getCommitList",pathMatch:"full"},
  {path:'getCommitList',component:GetCommitListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
