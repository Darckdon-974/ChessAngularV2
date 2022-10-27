import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Coup } from '../../shared/models/CoupModel';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CoupService {
  private coupsUrl = 'api/coups'; // URL to web API

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }


  // Get coups from the server
  getCoups(): Observable<Coup[]> {
    return this.http.get<Coup[]>(this.coupsUrl)
    .pipe(
      tap(_ => this.log('fetched coups')),
      catchError(this.handleError<Coup[]>('getCoups', []))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteManga(id: number): Observable<Coup> {
    const url = `${this.coupsUrl}`;
    return this.http.delete<Coup>(url, this.httpOptions).pipe(
      tap(_=> this.log(`deleted manga id=${id}`)),
      catchError(this.handleError<Coup>('deleteManga'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation= 'operation', result?: T){
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // TODO: send the error to remote logging infrastructure
      return of(result as T);
    };
  }

  // Log a HeroService message with the MessageService
  private log(message: string) {
    this.messageService.add(`MangaService: ${message}`);
  }
}
