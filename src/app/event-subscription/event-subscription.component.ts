import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, observable } from 'rxjs';
import { Observable, Subscription } from 'rxjs-observable';

@Component({
  selector: 'app-event-subscription',
  templateUrl: './event-subscription.component.html',
  styleUrls: ['./event-subscription.component.css']
})
export class EventSubscriptionComponent 
{
  // src = interval(2000);
  // id = Date.now();
 
  // constructor() {}
 
  // ngOnInit() {
  //   console.log("Component Created " + this.id);
 
  //   this.src.subscribe(value => {
  //     console.log("Received " + this.id);
  //   });
  // }
 
  // ngOnDestroy() {
  //   console.log("Component Destroyed " + this.id);
  // }

}
 