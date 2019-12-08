import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {HomeModalComponent} from './home-modal/home-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomeComponent}]),
  ],
  declarations: [
    HomeComponent,
    HomeModalComponent,
  ],
})
export class HomeModule {
}
