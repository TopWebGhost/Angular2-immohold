import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'resultyes',  // <home></home>

  templateUrl: './resultyes.template.html',

  styleUrls: ['./resultyes.style.scss']
})
export class resultyesComponent {
  constructor(public appState: AppState,public router: Router){

  }
  goNext(): void{
    this.appState.set('direction','next');
    //this.router.navigateByUrl('recomendations',{ skipLocationChange: true });
    this.router.navigateByUrl('primaryContent',{ skipLocationChange: true });
  }


}

