import { Component } from '@angular/core';
import { AppState } from '../../../app.service';
import { Router } from '@angular/router';
import { moldService } from "../../../shared/data/mold.service";
import { Health } from "../../../shared/data/health.class";

@Component({
  selector: 'question3-mobile',  // <home></home>

  templateUrl: './mobile.template.question3.html',

  styleUrls: ['../../scss/mobile.style.question.scss']
})
export class question3Mobile {
  private healthes: Health[];
  private health: string;
  private isMold:boolean;
  private isPest:boolean;
  private isFoodFloor:boolean;

  constructor(private _moldService:moldService,public appState: AppState,public router: Router){
  }
  ngOnInit(){
    this.isMold = (this.appState.get('service') == 'mold');
    this.isPest = (this.appState.get('service') == 'pest');
    this.isFoodFloor = (this.appState.get('service') == 'floor');
    this.healthes = this._moldService.healthes;
    this.health = this._moldService.moldData.health;
  }
  // goNext(id:number): void{
  //   this.appState.set('direction','next');
  //   this.router.navigateByUrl('analysis/'+id);
  // }
  trackBy(title:string) {
    this.appState.set('direction','next');
    this._moldService.moldData.health = title;
    this.router.navigateByUrl('analysis',{ skipLocationChange: true });
  }

}
