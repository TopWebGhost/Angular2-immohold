import { Component } from '@angular/core';
import { AppState } from '../../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tipp-portal-desktop-floor',  // <home></home>

  templateUrl: './template.html',

  styleUrls: ['../sass/style.scss']
})
export class tippPortalDesktopFloorComponent {
  constructor(private router:Router,private state:AppState){

  }
  goNext(){
    this.state.set('direction','next');
    this.router.navigateByUrl('/questions/1', { skipLocationChange: true });
  }
}

