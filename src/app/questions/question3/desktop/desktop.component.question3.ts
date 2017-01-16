import { Component } from '@angular/core';
import { moldService } from "../../../shared/data/mold.service";
import { Health } from "../../../shared/data/health.class";
import { Router } from '@angular/router';
import { AppState } from '../../../app.service';
@Component({
  selector: 'question3-desktop',  // <question1-desktop></question1-desktop>

  templateUrl: './desktop.template.question3.html',

  styleUrls: ['../../scss/desktop.style.question.scss']
})
export class question3Desktop {
  private healthes: Health[];
  private health: string;
  private isMold:boolean;
  private isPest:boolean;
  private isFoodFloor:boolean;

  constructor(private _moldService:moldService,public router: Router, public appState:AppState){

  }

  ngOnInit(){
    this.isMold = (this.appState.get('service') == 'mold');
    this.isPest = (this.appState.get('service') == 'pest');
    this.isFoodFloor = (this.appState.get('service') == 'floor');
    this.healthes = this._moldService.healthes;
    this.health = this._moldService.moldData.health;
  }

  trackBy(title:string) {
    this._moldService.moldData.health = title;
    this.router.navigateByUrl('analysis',{ skipLocationChange: true });
  }
}
