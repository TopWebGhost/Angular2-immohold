import { Component } from '@angular/core';
import { AppState } from '../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'article-base-recomendations',  // <home></home>

  templateUrl: './article-base-recomendations.template.html',

  styleUrls: ['../sass/article.style.scss']
})
export class articlebaserecomendationsComponent {

  constructor(public appState: AppState,public router: Router) {

  }

  goArticle(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('content-article',{ skipLocationChange: true });
  }
}

