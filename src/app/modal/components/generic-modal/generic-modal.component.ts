import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkPortalOutlet, PortalOutlet, TemplatePortal} from '@angular/cdk/portal';

import {ModalDirective} from 'ngx-bootstrap';

import {GenericModalService} from '../../services/generic-modal.service';
import {ModalPosition, ModalState} from '../../models';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent implements OnInit {

  @ViewChild('modal', {static: false}) modal: ModalDirective;
  @ViewChild(CdkPortalOutlet, {static: false}) portalOutlet: PortalOutlet;

  modalPositionEnum = ModalPosition;

  private position: ModalPosition;

  constructor(private genericModalService: GenericModalService) {
  }

  ngOnInit() {
    this.genericModalService.state
      .subscribe((state: ModalState) => {
        if (!!state) {
          this.position = state.position;

          if (state.open) {
            this.modal.show();
          } else {
            this.modal.hide();
          }
        }
      });

    this.genericModalService.portal
      .subscribe((portal: TemplatePortal) => {
        if (!!portal) {
          this.portalOutlet.detach();
          this.portalOutlet.attach(portal);
        }
      });
  }
}
