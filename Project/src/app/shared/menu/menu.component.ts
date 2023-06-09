import { AfterViewInit, Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit{
  @Output() selectedPage: EventEmitter<string>=new EventEmitter();
  @Input() currentPage: string='';
  @Output() onCloseSidenav: EventEmitter<boolean>=new EventEmitter();

  constructor(){}
  ngOnInit(): void{

  }

  ngAfterViewInit(): void{}

  menuSwitch() {
    this.selectedPage.emit(this.currentPage);
  }
  
  close(){
    this.onCloseSidenav.emit(true);
  }
}
