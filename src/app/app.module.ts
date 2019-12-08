import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {GenericModalModule} from './modal/generic-modal.module';
import {HomeModule} from './pages/home/home.module';
import {SecondaryModule} from './pages/secondary/secondary.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule),
      },
      {
        path: 'secondary',
        loadChildren: () => import('./pages/secondary/secondary.module').then(mod => mod.SecondaryModule),
      }
    ]),
    GenericModalModule,
    HomeModule,
    SecondaryModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
