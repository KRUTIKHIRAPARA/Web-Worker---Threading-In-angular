import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorReadingComponent } from './error-reading/error-reading.component';
import { MultiThreadingComponent } from './multi-threading/multi-threading.component';
import { EventSubscriptionComponent } from './event-subscription/event-subscription.component';

const routes: Routes = [
  
  {
    path:'error',
    component : ErrorReadingComponent
  },
  {
    path:'multi',
    component:MultiThreadingComponent
  },
  {
    path:'subscription',
    component:EventSubscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
