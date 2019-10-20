import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CobService {

  private rootUrl = 'http://localhost:8106';

  constructor(private httpClient: HttpClient) { }

  getCobMap$(): Observable<Map<number, string>> {
    const url = this.rootUrl + '/cob_categories/get_available_cobs';
    return this.httpClient.get(url).pipe(
      map(obj => new Map(Object.entries(obj)
        .map((k, v) => [+k, v.toString()]))
      ),
      catchError(this.logError)
    );
  }

  private logError(err: HttpErrorResponse): Observable<never> {
    if (err.error instanceof ErrorEvent) {
      console.error(`client or network error: ${err.error.message}`);
    } else {
      console.error(`server error: ${err.error.message}`);
    }
    return throwError(err.error.message);
  }
}
