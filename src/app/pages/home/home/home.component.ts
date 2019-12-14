import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {TemplatePortal} from '@angular/cdk/portal';

import {GenericModalService} from '../../../modal/services/generic-modal.service';
import {ModalPosition} from '../../../modal/models';

@Component({
  selector: 'app-home',
  template: `
    <ng-template #modalTemplate>
        <p>Home modal works!</p>
    </ng-template>

    <div>
        <p>home works!</p>
        <button class="btn btn-primary" (click)="openHomeModal()">Home modal</button>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('modalTemplate', {static: true}) modalTemplate: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef,
              private genericModalService: GenericModalService) {
  }

  ngOnInit() {
    this.genericModalService.setModalPortal(new TemplatePortal<any>(this.modalTemplate, this.viewContainerRef));
  }

  openHomeModal() {
    this.genericModalService.open(ModalPosition.CENTER);
  }
}
