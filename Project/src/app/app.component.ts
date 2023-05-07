import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Project';
  page='';

  constructor(private router: Router){}

  changePage(selectedPage: string){
    //this.page=selectedPage;
    this.router.navigateByUrl(selectedPage);
  }
  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any)=>{
    this.page=(evts.urlAfterRedirects as string).split('/')[1] as string;
  })
}
onToggleSidenav(sidenav: MatSidenav){
  sidenav.toggle();
}
onClose(event: any, sidenav: MatSidenav)
{
  if(event===true){
    sidenav.close();
  }
}
}
