import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, of } from 'rxjs';
import { Move } from '../../../../../shared/models/MoveModel';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class MoveService {

  // URL to Web api
  private movesUrl = 'api/moves';
  httpOtions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
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
    return this.http.put<Move>(this.movesUrl, move, this.httpOtions);
  }

  // DELETE move from the database
  deleteMove(id : number){
    const url = `${this.movesUrl}/${id}}`;
    return this.http.delete(url, this.httpOtions);
  }
}
