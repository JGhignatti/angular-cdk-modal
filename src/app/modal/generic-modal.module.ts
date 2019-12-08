import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortalModule} from '@angular/cdk/portal';

import {ModalModule} from 'ngx-bootstrap';

import {GenericModalComponent} from './components/generic-modal/generic-modal.component';

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    GenericModalComponent,
  ],
  exports: [
    GenericModalComponent,
  ],
})
export class GenericModalModule {
}
