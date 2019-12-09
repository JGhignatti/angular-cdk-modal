import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {TemplatePortal} from '@angular/cdk/portal';

import {GenericModalService} from '../../../modal/services/generic-modal.service';

@Component({
  selector: 'app-home-modal',
  template: `
    <ng-template #modalTemplate>
        <p>Home modal works!</p>
    </ng-template>
  `,
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
