import { Component } from '@angular/core';
import { AppState } from '../../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'video-other-desktop',  // <home></home>

  templateUrl: './video-other-desktop.template.html',

  styleUrls: ['../sass/video.style.scss']
})
export class videootherdesktopComponent {
  constructor(public appState: AppState,public router: Router) {
    this.isMold = true;
    //this.isMold = false;
    //this.isFoodFloor = true;
    this.isFoodFloor = false;
  }
  private isMold:boolean;
  private isFoodFloor:boolean;


  goArticleShimmel1() {
    this.appState.set('direction', 'next');
    //this.router.navigateByUrl('content-article', {skipLocationChange: true});
    this.router.navigateByUrl('contentArticleShimmel1', {skipLocationChange: true});
  }
  goArticleShimmel2(){
    this.appState.set('direction','next');
    //this.router.navigateByUrl('content-checklist',{ skipLocationChange: true });
    this.router.navigateByUrl('contentArticleShimmel2',{ skipLocationChange: true });
  }

  goArticleFloor1() {
    this.appState.set('direction', 'next');
    //this.router.navigateByUrl('content-article', {skipLocationChange: true});
    this.router.navigateByUrl('contentArticleFloor1', {skipLocationChange: true});
  }
  goArticleFloor2() {
    this.appState.set('direction', 'next');
    //this.router.navigateByUrl('content-article', {skipLocationChange: true});
    this.router.navigateByUrl('contentArticleFloor2', {skipLocationChange: true});
  }


}

