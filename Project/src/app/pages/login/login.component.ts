import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FakeLoadingService } from 'src/app/shared/services/fake-loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  email=new FormControl('');
  password=new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation: Observable<boolean> | undefined;

  loading: boolean=false;

  constructor(private router: Router, private loadingService: FakeLoadingService){}

  ngOnInit(): void {
    
  }

  login(){
    this.loading=true;
    /*this.loadingService.loadingWithPromise(this.email.value, this.password.value).then((_: boolean)=>{
      this.router.navigateByUrl('/main');
    }).catch(error=>{
      console.error('Rossz email vagy jelszó.');
    }).finally(()=>{
      console.log('Ez lesz az utolsó.')
    });*/
    /*this.loadingObservation=this.loadingService.loadingWithObservable(this.email.value, this.password.value)
    this.loadingSubscription=this.loadingObservation.subscribe((data: boolean)=>{
        console.log(data);
      });*/
    this.loadingObservation=this.loadingService.loadingWithObservable(this.email.value, this.password.value)
    this.loadingSubscription=this.loadingObservation.subscribe({
        next: (data:boolean) => {
          this.router.navigateByUrl('/main');},
          error: (error) => {console.error(error); this.loading=false;},
          complete: () => { this.loading=false;}
    });

  }

  ngOnDestroy(){
    this.loadingSubscription?.unsubscribe();
  }

}
