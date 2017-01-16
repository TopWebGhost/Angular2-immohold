import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
//import { About } from './about';
import { Analysis } from './analysis';
import { NoContent } from './no-content';
import { Questions } from './questions';
import { Question1 } from './questions/question1';
import { Question2 } from './questions/question2';
import { Question3 } from './questions/question3';
import { Success } from './success';
import { Callback } from './callback-info';
import { Failure } from './failure';

import { Portal } from './portal';
import { Articles } from './articles';

import { contentArticle } from './articles/content-article';
import { contentChecklist } from './articles/content-checklist';
import { primaryContent } from './primary-content';

import { primaryContentShimmel } from './primary-content/shimmel';
import { primaryContentPest } from './primary-content/pest';
import { primaryContentFloor } from './primary-content/floor';
import { contentArticleShimmel1 } from './articles/content-article-shimmel-1';
import { contentArticleShimmel2 } from './articles/content-article-shimmel-2';
import { contentArticleFloor1 } from './articles/content-article-floor-1';
import { contentArticleFloor2 } from './articles/content-article-floor-2';
import { contentArticlePest1 } from './articles/content-article-pest-1';
import { contentArticlePest2 } from './articles/content-article-pest-2';

import { contentTerms } from './articles/terms';
import { contentDisclaimer } from './articles/disclaimer';
import { contentContacts } from './articles/contacts';
import { contentAbout } from './articles/about';

import { Endofflow } from "./end-of-flow";
import { Photo } from "./problem-photo";
import { Upload } from "./upload-photo";
import { Details } from "./product-details";




import { DataResolver } from './app.resolver';



export const ROUTES: Routes = [
  //{ path: 'mold',     redirectTo:'home' },
  { path: '',  redirectTo:'home',pathMatch: 'full'},
  { path: 'home',  component: Home},
   { path: 'schimmel',  component: Home},
   { path: 'bodenbelaege',  component: Home},
   { path: 'schaedlinge',  component: Home},

  // { path: 'floor',  component: Home},
  // { path: 'pest',  component: Home},


  //{ path: 'about', component: About },

  { path: 'questions' ,component: Questions,
  children: [
    { path: '', redirectTo: '1', pathMatch: 'full' },
    { path: '1', component: Question1 },
    { path: '2', component: Question2 },
    { path: '3', component: Question3 }
  ]
  },
  { path: 'success', component: Success},
  { path: 'callback-info', component: Callback },
  { path: 'end-of-flow', component: Endofflow },
  { path: 'problem-photo', component: Photo },
  { path: 'upload-photo', component: Upload },
  { path: 'product-details', component: Details },

  { path: 'failure', component: Failure },
  { path: 'primaryContent', component: primaryContent },

  { path: 'primaryContentShimmel', component: primaryContentShimmel },
  { path: 'primaryContentPest', component: primaryContentPest },
  { path: 'primaryContentFloor', component: primaryContentFloor },
  { path: 'contentArticleShimmel1', component: contentArticleShimmel1 },
  { path: 'contentArticleShimmel2', component: contentArticleShimmel2 },
  { path: 'contentArticleFloor1', component: contentArticleFloor1 },
  { path: 'contentArticleFloor2', component: contentArticleFloor2 },
  { path: 'contentArticlePest1', component: contentArticlePest1 },
  { path: 'contentArticlePest2', component: contentArticlePest2 },

  { path: 'portal', component: Portal },

  { path: 'articles', component: Articles},
  { path: 'content-article', component: contentArticle},
  { path: 'content-checklist', component: contentChecklist},
  { path: 'terms', component: contentTerms},
  { path: 'disclaimer', component: contentDisclaimer},
  { path: 'contacts', component: contentContacts},
  { path: 'about', component: contentAbout},

  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  {
    path: 'analysis', component: Analysis ,
  },
  { path: '**',    component:Home },

];
