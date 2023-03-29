import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Move } from '../../shared/entities/move.entity';
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class MoveService {

  // URL to Web api
  private url = `${environment.backendUrl + '/move'}`;
  httpOtions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient,
  ) {}

  // Get moves from the database
  getMoves() : Observable<Move[]>{
    return this.http.get<Move[]>(this.url);
  }

  // Add moves to the database
  addMove(move : Move) : Observable<Move> {
    return this.http.post<Move>(this.url, move, this.httpOtions);
  }

  // Put move from the database
  updateMove(move : Move) : Observable<Move>{
    return this.http.patch<Move>(this.url + `/${move.id}`, move, this.httpOtions);
  }

  // DELETE move from the database
  deleteMove(id : number){
    return this.http.delete(this.url + `/${id}`, this.httpOtions);
  }
}
