import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

import {GenericModalService} from '../../../modal/services/generic-modal.service';
import {TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.scss']
})
export class HomeModalComponent implements OnInit {

  @ViewChild('modalTemplate', {static: true}) modalTemplate: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef,
              private genericModalService: GenericModalService) {
  }

  ngOnInit() {
    this.genericModalService.setModalPortal(new TemplatePortal<any>(this.modalTemplate, this.viewContainerRef));
  }

}
