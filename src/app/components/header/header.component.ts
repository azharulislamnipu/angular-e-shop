import { Component, OnInit ,HostListener,HostBinding} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  show = '';

  constructor() { }

  ngOnInit() {
  }
  changeHover($event){
    $event.preventDefault();
    this.show = $event.type == "mouseover" ? 'show' : '';
  }


}
