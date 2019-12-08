import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';
import {TemplatePortal} from '@angular/cdk/portal';

import {ModalPosition, ModalState, ModalType} from '../models';

@Injectable({providedIn: 'root'})
export class GenericModalService {

  private state$ = new BehaviorSubject<ModalState>(undefined);
  private portal$ = new BehaviorSubject<TemplatePortal>(undefined);
  private type$ = new BehaviorSubject<ModalType>(undefined);

  get state(): Observable<ModalState> {
    return this.state$.asObservable();
  }

  get portal(): Observable<any> {
    return this.portal$.asObservable();
  }

  get type(): Observable<ModalType> {
    return this.type$.asObservable();
  }

  open(position: ModalPosition, type?: ModalType) {
    this.type$.next(type);
    this.state$.next({open: true, position});
  }

  close() {
    this.state$.next({open: false, position: undefined});
  }

  setModalPortal(portal: TemplatePortal) {
    this.portal$.next(portal);
  }
}
