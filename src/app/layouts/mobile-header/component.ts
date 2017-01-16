import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ EmitterService } from '../../questions/emitter'
import { AppState } from '../../app.service';


@Component({
  selector: 'mobile-header',

  templateUrl: './template.html',

  styleUrls: ['./style.scss'],

})


export class mobileHeaderComponent {
  constructor( private router: Router,private state:AppState){

  }
  emitter = EmitterService.get("direction");

  goBack(): void {
    window.history.back();

  }
  goHome(){
    return false;
  }
}
