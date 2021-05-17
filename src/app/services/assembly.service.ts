import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AssemblyService {
  private assembliesList = new BehaviorSubject([]);
  assembliesList$ = this.assembliesList.asObservable();

  constructor(private httpService: HttpService) {}

  getAssemblies() {
    return this.httpService.get('posts').pipe(
      tap((res) => {
        this.assembliesList.next(res);
        return res;
      }),
      catchError(this.httpService.handleError<[]>([]))
    );
  }
}
