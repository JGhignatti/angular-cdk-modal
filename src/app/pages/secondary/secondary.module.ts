import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SecondaryComponent} from './secondary/secondary.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SecondaryComponent},
    ]),
  ],
  declarations: [
    SecondaryComponent,
  ],
})
export class SecondaryModule {
}
