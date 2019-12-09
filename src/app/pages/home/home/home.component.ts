import {Component} from '@angular/core';

import {GenericModalService} from '../../../modal/services/generic-modal.service';
import {ModalPosition} from '../../../modal/models';

@Component({
  selector: 'app-home',
  template: `
    <app-home-modal></app-home-modal>

    <div>
        <p>home works!</p>
        <button class="btn btn-primary" (click)="openHomeModal()">Home modal</button>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private genericModalService: GenericModalService) {
  }

  openHomeModal() {
    this.genericModalService.open(ModalPosition.CENTER);
  }
}
