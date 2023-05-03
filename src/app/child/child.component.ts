import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  src = interval(2000);
  id = Date.now();
 
  constructor() {}
 
  ngOnInit() {
    console.log("Component Created " + this.id);
 
    this.src.subscribe(value => {
      console.log("Received " + this.id);
    });
  }
 
  ngOnDestroy() {
    console.log("Component Destroyed " + this.id);
  }
}
