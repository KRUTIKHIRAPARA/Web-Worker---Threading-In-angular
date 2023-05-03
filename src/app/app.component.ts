import { Component, OnInit, VERSION } from '@angular/core';
import { PrimeCalculator } from './app.prime';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = "Angular " + VERSION.major;
 
    showChild = false;

  title = 'Web-Worker';


  //========================**  Create Web Workers Through Thread  **=============================
  
  prime10 : number = 0;
   prime1000 : number = 0;
   prime10001 : number = 0;
   prime10002 : number = 0;
   prime10003 : number = 0;
   prime10004 : number = 0;
   
   find10thPrimeNumber() {
     this.prime10 = PrimeCalculator.findNthPrimeNumber(10);
    }
    
    find1000thPrimeNumber() {
    
      if (typeof Worker !== 'undefined') {
        //  const worker = new Worker('./app.worker', { type: 'module' });

        // const worker = new Worker(new );
        const worker = new Worker(new URL('./app.worker',import.meta.url));
        worker.onmessage = ({ data }) => {
          this.prime1000 = data;
        };
        worker.postMessage(1000);

        const worker1 = new Worker(new URL('./app.worker',import.meta.url));
        worker1.onmessage = ({ data }) => {
          this.prime10001 = data;
        };
        worker1.postMessage(5000);

        const worker2 = new Worker(new URL('./app.worker',import.meta.url));
        worker2.onmessage = ({ data }) => {
          this.prime10002 = data;
        };
        worker2.postMessage(500);

        const worker3 = new Worker(new URL('./app.worker',import.meta.url));
        worker3.onmessage = ({ data }) => {
          this.prime10003 = data;
        };
        worker3.postMessage(20000);

        const worker4 = new Worker(new URL('./app.worker',import.meta.url));
        worker4.onmessage = ({ data }) => {
          this.prime10004 = data;
        };
        worker4.postMessage(800);
      } else {
        // Web Workers are not supported in this environment.
        // You should add a fallback so that your program still executes correctly.
      }
    }

    
    

  }