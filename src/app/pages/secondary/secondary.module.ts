import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SecondaryComponent} from './secondary/secondary.component';
import {SecondaryFirstModalComponent} from './secondary-first-modal/secondary-first-modal.component';
import {SecondarySecondModalComponent} from './secondary-second-modal/secondary-second-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SecondaryComponent},
    ]),
  ],
  declarations: [
    SecondaryComponent,
    SecondaryFirstModalComponent,
    SecondarySecondModalComponent,
  ],
})
export class SecondaryModule {
}
