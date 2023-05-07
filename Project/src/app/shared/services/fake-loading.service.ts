import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeLoadingService {

  constructor() { }

  /*loadingWithPromise(email: string, password:string): Promise<boolean>{
    return new Promise((resolve, reject)=>{
    let i=0;
    setTimeout(()=>{
      i++;
          if(email === 'test@test.com' &&  password === 'test')
          {
            resolve(true);
          }
          else{
            reject(false);
          }
    },3000);
  });
  }*/

  loadingWithObservable(email: any, password: any): Observable<boolean>{
    return new Observable((subscriber: Subscriber<boolean>) => {
      let i=0;
      const interval=setInterval(()=>{
        i++;
        //subscriber.next(i);
        if(i===3){
          if(email === 'test@test.com' &&  password === 'test')
          {
            subscriber.next(true);
            subscriber.complete();
          }
          else{
            subscriber.error(false);
          }
        }
      },1000);
    });
  }



}
