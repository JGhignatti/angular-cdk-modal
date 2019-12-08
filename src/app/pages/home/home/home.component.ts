import {Component} from '@angular/core';

import {GenericModalService} from '../../../modal/services/generic-modal.service';
import {ModalPosition} from '../../../modal/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private genericModalService: GenericModalService) {
  }

  openHomeModal() {
    this.genericModalService.open(ModalPosition.CENTER);
  }
}
