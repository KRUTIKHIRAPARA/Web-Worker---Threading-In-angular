import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error-reading',
  templateUrl: './error-reading.component.html',
  styleUrls: ['./error-reading.component.css']
})
export class ErrorReadingComponent implements OnInit{
  constructor(){}

    //========================**  Error Reading & Handling  **=============================


    myObservable = new Observable((observer)=>{
      console.log('Observable Start');

      var arr = [1,3,4,5,6,'67',9,7,8];

      // for(let i=0;i<arr.length;i++)
      // {
      //   if(typeof arr[i] == 'number')
      //   {
      //     setTimeout(()=>{observer.next("1")},1000)
      //     ;
      //   }
      //   else 
      //   {
      //     setTimeout(()=>{observer.error(new Error('Something Went Wrong! Please Try Again Later'))},1000)
      //   }
      // }



      setTimeout(()=>{observer.next("1")},1000)
      setTimeout(()=>{observer.next("2")},2000)
      setTimeout(()=>{observer.next("3")},3000)
      // setTimeout(()=>{observer.error(new Error('Something Went Wrong! Please Try Again Late'))},3000)
      setTimeout(()=>{observer.next("4")},4000)
      setTimeout(()=>{observer.next("5")},5000)
      setTimeout(()=>{observer.complete()},6000) 
      setTimeout(()=>{observer.complete()},3000) 
    }); 
  
  
  
    

  ngOnInit(): void {
    this.myObservable.subscribe((val)=>{
      console.log(val);
    },(error)=>{
      alert(error.message);
    },()=>{
      alert('Successfully Observable Complete.... ');
    });
  }

}
