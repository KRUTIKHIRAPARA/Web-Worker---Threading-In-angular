import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, asyncScheduler, interval, of, share, take } from 'rxjs';

@Component({
  selector: 'app-multi-threading',
  templateUrl: './multi-threading.component.html',
  styleUrls: ['./multi-threading.component.css']
})
export class MultiThreadingComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {
    let observer = interval(1000).pipe(take(5), share());  
    const subscribe_one = observer.subscribe(  
      x => console.log("Value from Sub1 = "+x)  
    );  
    const subscribe_two = observer.subscribe(  
      x => console.log("Value from Sub2 = "+x)  
    );  
    setTimeout(() => {  
      const subscribe_three = observer.subscribe(  
          x => console.log("Value from Sub3 = "+x)  
      );  
    }, 2000);  
      }
}
