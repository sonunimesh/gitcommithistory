import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommitService {

  constructor(private http: HttpClient) { }
 
getCommit(commitApi:string) {
  return this.http.get(commitApi);
}
}
