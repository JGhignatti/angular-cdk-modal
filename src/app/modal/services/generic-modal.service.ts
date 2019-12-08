import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class GenericModalService {

  private state$ = new BehaviorSubject({open: false});

  get state(): Observable<{open: boolean}> {
    return this.state$.asObservable();
  }

  open() {
    this.state$.next({open: true});
  }

  close() {
    this.state$.next({open: false});
  }
}
