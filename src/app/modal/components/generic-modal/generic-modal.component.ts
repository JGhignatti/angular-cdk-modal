import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkPortalOutlet, PortalOutlet} from '@angular/cdk/portal';

import {ModalDirective} from 'ngx-bootstrap';

import {GenericModalService} from '../../services/generic-modal.service';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent implements OnInit {

  @ViewChild('modal', {static: false}) modal: ModalDirective;
  @ViewChild(CdkPortalOutlet, {static: false}) portalOutlet: PortalOutlet;

  constructor(private genericModalService: GenericModalService) {
  }

  ngOnInit() {
  }

}
