import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Move } from '../../../../../shared/interfaces/move.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoveService {

  // URL to Web api
  private movesUrl = `${environment.backendUrl}/move`;
  httpOtions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient,
  ) { }

  // Get moves from the database
  getMoves() : Observable<Move[]>{
    return this.http.get<Move[]>(this.movesUrl);
  }

  // Add moves to the database
  addMove(move : Move) : Observable<Move> {
    return this.http.post<Move>(this.movesUrl, move, this.httpOtions);
  }

  // Put move from the database
  updateMove(move : Move) : Observable<Move>{
    return this.http.patch<Move>(this.movesUrl + '/' + move.id, move, this.httpOtions);
  }

  // DELETE move from the database
  deleteMove(id : number){
    const url = `${this.movesUrl}/${id}}`;
    return this.http.delete(url, this.httpOtions);
  }
}
