import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {GenericModalModule} from './modal/generic-modal.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    GenericModalModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
