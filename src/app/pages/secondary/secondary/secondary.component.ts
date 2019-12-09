import {Component} from '@angular/core';

import {GenericModalService} from '../../../modal/services/generic-modal.service';
import {ModalPosition, ModalType} from '../../../modal/models';

@Component({
  selector: 'app-secondary',
  template: `
    <app-secondary-first-modal></app-secondary-first-modal>
    <app-secondary-second-modal></app-secondary-second-modal>

    <div>
        <p>secondary works!</p>
        <button class="btn btn-primary" (click)="onFirstClick()">Secondary First Modal</button>
        <button class="btn btn-primary" (click)="onSecondClick()">Secondary Second Modal</button>
    </div>
  `,
  styleUrls: ['./secondary.component.scss']
})
export class SecondaryComponent {

  constructor(private genericModalService: GenericModalService) {
  }

  onFirstClick() {
    this.genericModalService.open(ModalPosition.RIGHT, ModalType.SECONDARY_1);
  }

  onSecondClick() {
    this.genericModalService.open(ModalPosition.RIGHT, ModalType.SECONDARY_2);
  }
}
