import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Ng2PageScrollModule} from 'ng2-page-scroll/bundles/ng2-page-scroll.umd.js';
//import {MdButtonToggleModule} from '@angular2-material/button-toggle/button-toggle';
import {MdButtonModule} from '@angular2-material/button/button';
import {MdCheckboxModule} from '@angular2-material/checkbox/checkbox';
import {MdRadioModule} from '@angular2-material/radio/radio';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle/slide-toggle';
import {MdSliderModule} from '@angular2-material/slider/slider';
import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
import {MdListModule} from '@angular2-material/list/list';
import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
import {MdCardModule} from '@angular2-material/card/card';
import {MdIconModule} from '@angular2-material/icon/icon';
import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
import {MdProgressBarModule} from '@angular2-material/progress-bar/progress-bar';
import {MdInputModule} from '@angular2-material/input/input';
import {MdTabsModule} from '@angular2-material/tabs/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
import {MdTooltipModule} from '@angular2-material/tooltip/tooltip';
import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
import {PortalModule} from '@angular2-material/core/portal/portal-directives';
import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';
import {MdMenuModule} from '@angular2-material/menu/menu';
import {RtlModule} from '@angular2-material/core/rtl/dir';
import {SelectModule} from 'angular2-select';
import { ReactiveFormsModule } from '@angular/forms';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InteralStateType } from './app.service';
import { moldService } from './shared/data/mold.service';
import { Home } from './home';

import { NoContent } from './no-content';
import { XLarge } from './home/x-large';
import { homeDesktop } from './home/desktop';
import { homeMobile } from './home/mobile';
import { failureDesktop } from './failure/desktop';
import { failureMobile } from './failure/mobile';
import { successDesktop } from './success/desktop';
import { successMobile } from './success/mobile';
import { callbackDesktop } from './callback-info/desktop';
import { callbackMobile } from './callback-info/mobile';
import { endofflowDesktop } from './end-of-flow/desktop';
import { endofflowMobile } from './end-of-flow/mobile';
import { photoDesktop } from './problem-photo/desktop';
import { photoMobile } from './problem-photo/mobile';
import { uploadDesktop } from './upload-photo/desktop';
import { uploadMobile } from './upload-photo/mobile';

import { detailsDesktop } from './product-details/desktop';
import { detailsMobile } from './product-details/mobile';

import { Title } from './home/title';
import { sidenavComponent } from './shared/sidenav';

// tipp
import { tippbaseComponent } from './shared/tipp/tipp-base';

import { tippPortalMobileShimmelComponent } from './shared/tipp/tipp-portal-mobile/shimmel';
import { tippPortalMobilePestComponent } from './shared/tipp/tipp-portal-mobile/pest';
import { tippPortalMobileFloorComponent } from './shared/tipp/tipp-portal-mobile/floor';

import { tippPortalDesktopShimmelComponent } from './shared/tipp/tipp-portal-desktop/shimmel';
import { tippPortalDesktopFloorComponent } from './shared/tipp/tipp-portal-desktop/floor';
import { tippPortalDesktopPestComponent } from './shared/tipp/tipp-portal-desktop/pest';

import { tippdesktopComponent } from './shared/tipp/tipp-desktop';
import { tipprecomendComponent } from './shared/tipp/tipp-recomend';
import { tippsubpageComponent } from './shared/tipp/tipp-subpage';
import { tippverticalbuttonComponent } from './shared/tipp/tipp-vertical-button';

// configuration
import { testconfigurationComponent } from './shared/configuration/test-configuration';

import { footerlinkComponent } from './shared/footerlink';
import { footerdesktopComponent } from './shared/footerdesktop';
import { topbarComponent } from './shared/topbar';
import { mobilenavComponent } from './shared/mobilenav'


// questions
import { Questions } from './questions';
import { questionsDesktop } from './questions/desktop';
import { questionsMobile } from './questions/mobile';
import { Question1 } from './questions/question1';
import { question1Desktop } from './questions/question1/desktop';
import { question1Mobile } from './questions/question1/mobile';
import { Question2 } from './questions/question2';
import { question2Desktop } from './questions/question2/desktop';
import { question2Mobile } from './questions/question2/mobile';
import { Question3 } from './questions/question3';
import { question3Desktop } from './questions/question3/desktop';
import { question3Mobile } from './questions/question3/mobile';

import { questioninfo1Component } from './shared/question-info/mobile/question-info-1';
import { questioninfo2Component } from './shared/question-info/mobile/question-info-2';
import { questioninfo3Component } from './shared/question-info/mobile/question-info-3';
import { questioninfo1desktopComponent, } from './shared/question-info/desktop/question-info-1';
import { questioninfo2desktopComponent, } from './shared/question-info/desktop/question-info-2';
import { questioninfo3desktopComponent, } from './shared/question-info/desktop/question-info-3';

import { questioninfo1foodfloorComponent } from './shared/question-info/mobile-food-floor/question-info-1';
import { questioninfo2foodfloorComponent } from './shared/question-info/mobile-food-floor/question-info-2';
import { questioninfo3foodfloorComponent } from './shared/question-info/mobile-food-floor/question-info-3';
import { questioninfo1desktopfoodfloorComponent, } from './shared/question-info/desktop-food-floor/question-info-1';
import { questioninfo2desktopfoodfloorComponent, } from './shared/question-info/desktop-food-floor/question-info-2';
import { questioninfo3desktopfoodfloorComponent, } from './shared/question-info/desktop-food-floor/question-info-3';

import { resultnoComponent } from './shared/resultno';
import { resultyesComponent } from './shared/resultyes';
import { Analysis } from './analysis';
import { analysisDesktop } from './analysis/desktop';
import { analysisMobile } from './analysis/mobile';
import { Success } from './success';
import { Failure } from './failure';

import { EmitterService } from './questions/emitter';
import { WindowService } from './shared/window';
import { topmenudesktopComponent } from './shared/topmenudesktop';

import { desktopnavComponent } from './shared/desktopnav';

// carousel
import { CarouselModule } from './shared/carousel/carousel.module'
import { carouselhomeComponent } from './shared/carousel/carousel-home/carousel-home.component';
import { carouselhomefoodfloorComponent } from './shared/carousel/carousel-home-food-floor/carousel-home.component';
import { carouselhomewithimageComponent } from './shared/carousel/carousel-home-with-images/carousel-home-with-images.component';
import { carouselothervideoComponent } from './shared/carousel/carousel-other-video/carousel-other-video.component';
import { carouseltestimonialsComponent } from './shared/carousel/carousel-testimonials/carousel-testimonials.component';

//portal:
import { Portal } from './portal';
import { portalDesktop } from './portal/desktop';
import { portalMobile } from './portal/mobile';

// Primary Content:
import { primaryContent } from './primary-content';

import { primaryContentShimmel } from './primary-content/shimmel';
import { primaryContentShimmelDesktop } from './primary-content/shimmel/desktop';
import { primaryContentShimmelMobile } from './primary-content/shimmel/mobile';

import { primaryContentPest } from './primary-content/pest';
import { primaryContentPestDesktop } from './primary-content/pest/desktop';
import { primaryContentPestMobile } from './primary-content/pest/mobile';

import { primaryContentFloor } from './primary-content/floor';
import { primaryContentFloorDesktop } from './primary-content/floor/desktop';
import { primaryContentFloorMobile } from './primary-content/floor/mobile';

// Rate
import { ratebaseComponent } from './shared/rate/rate-base';
import { ratevideoComponent } from './shared/rate/rate-video';
import { rategoodComponent } from './shared/rate/rate-good';
import { ratebadComponent } from './shared/rate/rate-bad';
import { ratemorecontentComponent } from './shared/rate/rate-more-content';
import { rateforsubpageComponent } from './shared/rate/rate-for-subpage';

import { blocknotedesktopComponent } from './shared/block-note/block-note-desktop';
import { blocknotemobileComponent } from './shared/block-note/block-note-mobile';

import { blocknoterecomendationsComponent } from './shared/block-note/block-note-recomendations';

import { blocknotesubpagemobileComponent } from './shared/block-note/block-note-subpage-mobile';
import { blocknotesubpagedesktopComponent } from './shared/block-note/block-note-subpage-desktop';
import { blocknotefinishComponent } from './shared/block-note/block-note-finish';
import { blocknotefinishmobileComponent } from './shared/block-note/block-note-finish-mobile';

// tag line

import { taglinePortalMobileShimmel1 } from './shared/tag-line/tag-line-portal-mobile/shimmel/1';
import { taglinePortalMobileShimmel2 } from './shared/tag-line/tag-line-portal-mobile/shimmel/2';
import { taglinePortalMobileFloor1 } from './shared/tag-line/tag-line-portal-mobile/floor/1';
import { taglinePortalMobileFloor2 } from './shared/tag-line/tag-line-portal-mobile/floor/2';
import { taglinePortalMobilePest1 } from './shared/tag-line/tag-line-portal-mobile/pest/1';
import { taglinePortalMobilePest2 } from './shared/tag-line/tag-line-portal-mobile/pest/2';

import { taglinebaseComponent } from './shared/tag-line/tag-line-base';
import { taglinechecklistlinkComponent } from './shared/tag-line/tag-line-checklist-link';
import { taglinecategoryonlyComponent } from './shared/tag-line/tag-line-category-only';
import { taglineforsubpageComponent } from './shared/tag-line/tag-line-for-subpage';
import { taglineforsubpagechecklistsComponent } from './shared/tag-line/tag-line-for-subpage-checklists';
import { taglineopacityComponent } from './shared/tag-line/tag-line-opacity';
import { taglineopacityarticleComponent } from './shared/tag-line/tag-line-opacity-article';
import { taglinecategoryComponent } from './shared/tag-line/tag-line-category';
import { taglinecategoryvideoComponent } from './shared/tag-line/tag-line-category-video';
import { tagLineCategoryDrillComponent, } from './shared/tag-line/tag-line-category-drill';
import { tagLineCategoryPestComponent, } from './shared/tag-line/tag-line-category-pest';
import { taglinevideootherComponent } from './shared/tag-line/tag-line-video-other';

// tables
import { tablesubarticlesComponent } from './shared/table/table-subarticles';

// layouts
import { exampleComponent } from './layouts/_example';
import { mobileSidenavComponent } from './layouts/mobile-sidenav';
import { mobileSidenavMenuComponent } from './layouts/mobile-sidenav-menu';
import { mobileSidenavCopyrightComponent } from './layouts/mobile-sidenav-copyright';
import { mobileSidenavFooterComponent } from './layouts/mobile-sidenav-footer';
import { mobileHeaderComponent } from './layouts/mobile-header';
import { mobileSidenavTopBlockComponent } from './layouts/mobile-sidenav-top-block';

// todo - do not remove linker!!! This is the test component to check all links from the homepage.
import { linkerML } from './linker';

// articles
import { Articles } from './articles';

import { contentArticle } from './articles/content-article/';
import { articleContentMobileShimmel1 } from './articles/content-article/mobile/shimmel/1';
import { articleContentDesktopShimmel1 } from './articles/content-article/desktop/shimmel/1';
import { articleContentMobileShimmel2 } from './articles/content-article/mobile/shimmel/2';
import { articleContentDesktopShimmel2 } from './articles/content-article/desktop/shimmel/2';

import { articleContentMobileFloor1 } from './articles/content-article/mobile/floor/1';
import { articleContentDesktopFloor1 } from './articles/content-article/desktop/floor/1';

import { articleContentMobileFloor2 } from './articles/content-article/mobile/floor/2';
import { articleContentDesktopFloor2 } from './articles/content-article/desktop/floor/2';

import { articleContentDesktopPest1 } from './articles/content-article/desktop/pest/1';
import { articleContentMobilePest1 } from './articles/content-article/mobile/pest/1';

import { articleContentDesktopPest2 } from './articles/content-article/desktop/pest/2';
import { articleContentMobilePest2 } from './articles/content-article/mobile/pest/2';

import { contentChecklist } from './articles/content-checklist/';
import { checklistContentDesktop } from './articles/content-checklist/desktop';
import { checklistContentMobile } from './articles/content-checklist/mobile';

import { contentArticleShimmel1 } from './articles/content-article-shimmel-1';
import { contentArticleShimmel2 } from './articles/content-article-shimmel-2';
import { contentArticleFloor1 } from './articles/content-article-floor-1';
import { contentArticleFloor2 } from './articles/content-article-floor-2';
import { contentArticlePest1 } from './articles/content-article-pest-1';
import { contentArticlePest2 } from './articles/content-article-pest-2';

import { contentTerms } from './articles/terms/';
import { termsContentDesktop } from './articles/terms/desktop';
import { termsContentMobile } from './articles/terms/mobile';
import { termsContent } from './articles/terms/content';

import { contentDisclaimer } from './articles/disclaimer/';
import { disclaimerContentDesktop } from './articles/disclaimer/desktop';
import { disclaimerContentMobile } from './articles/disclaimer/mobile';
import { disclaimerContent } from './articles/disclaimer/content';

import { contentContacts } from './articles/contacts/';
import { contactsContentDesktop } from './articles/contacts/desktop';
import { contactsContentMobile } from './articles/contacts/mobile';
import { contactsContent } from './articles/contacts/content';


import { contentAbout } from './articles/about/';
import { aboutContentDesktop } from './articles/about/desktop';
import { aboutContentMobile } from './articles/about/mobile';
import { aboutContent } from './articles/about/content';

import { articlebaseComponent } from './shared/article/article-base';

import { articlesPortalShimmelComponent } from './shared/article/articles-portal/common/shimmel';
import { articlesPortalFloorComponent } from './shared/article/articles-portal/common/floor';
import { articlesPortalPestComponent } from './shared/article/articles-portal/common/pest';

import { portalArticle1ShimmelComponent } from './shared/article/articles-portal/desktop/portal-article-1/shimmel';
import { portalArticle1ShimmelMobileComponent } from './shared/article/articles-portal/mobile/portal-article-1/shimmel';
import { portalArticle1FloorComponent } from './shared/article/articles-portal/desktop/portal-article-1/floor';
import { portalArticle1FloorMobileComponent } from './shared/article/articles-portal/mobile/portal-article-1/floor';
import { portalArticle1PestComponent } from './shared/article/articles-portal/desktop/portal-article-1/pest';
import { portalArticle1PestMobileComponent } from './shared/article/articles-portal/mobile/portal-article-1/pest';

import { portalChecklist1ShimmelComponent } from './shared/article/articles-portal/desktop/portal-checklist-1/shimmel';
import { portalChecklist1ShimmelMobileComponent } from './shared/article/articles-portal/mobile/portal-checklist-1/shimmel';
import { portalChecklist1FloorComponent } from './shared/article/articles-portal/desktop/portal-checklist-1/floor';
import { portalChecklist1FloorMobileComponent } from './shared/article/articles-portal/mobile/portal-checklist-1/floor';
import { portalChecklist1PestComponent } from './shared/article/articles-portal/desktop/portal-checklist-1/pest';
import { portalChecklist1PestMobileComponent } from './shared/article/articles-portal/mobile/portal-checklist-1/pest';
import { articlebaserecomendationsComponent } from './shared/article/article-base-recomendations';

import { articleHeaderShimmel1 } from './shared/article/article-for-subpage-header/shimmel/1';
import { articleHeaderShimmel2 } from './shared/article/article-for-subpage-header/shimmel/2';

import { articleHeaderFloor1 } from './shared/article/article-for-subpage-header/floor/1';
import { articleHeaderFloor2 } from './shared/article/article-for-subpage-header/floor/2';

import { articleHeaderPest1 } from './shared/article/article-for-subpage-header/pest/1';
import { articleHeaderPest2 } from './shared/article/article-for-subpage-header/pest/2';

import { articleforrecomendationschecklistsmobileComponent } from './shared/article/article-for-recomendations-checklists-mobile';
import { listofarticlesComponent } from './shared/listofarticles';
import { excerptComponent } from './shared/article/excerpt';
import { excerptsubpagechecklistComponent } from './shared/article/excerpt-subpage-checklist';
import { excerptsubpagechecklist2Component } from './shared/article/excerpt-subpage-checklist-2';

import { otherarticlesComponent } from './shared/article/other-articles';
import { otherArticlesComponentToShimmelArticle1 } from './shared/article/other-articles/to-shimmel-article-1';
import { otherArticlesComponentToShimmelArticle2 } from './shared/article/other-articles/to-shimmel-article-2';
import { otherArticlesComponentToFloorArticle1 } from './shared/article/other-articles/to-floor-article-1';
import { otherArticlesComponentToFloorArticle2 } from './shared/article/other-articles/to-floor-article-2';
import { otherArticlesComponentToPestArticle1 } from './shared/article/other-articles/to-pest-article-1';
import { otherArticlesComponentToPestArticle2 } from './shared/article/other-articles/to-pest-article-2';

// video
import { videobestComponent } from './shared/video/video-best';
import { videobestComponentFloor } from './shared/video/video-best/floor';
import { videobestComponentShimmel } from './shared/video/video-best/shimmel';
import { videobestComponentPest } from './shared/video/video-best/pest';
import { videootherComponent } from './shared/video/video-other';
import { videootherrightComponent } from './shared/video/video-other-right';
import { videoothermobileComponent } from './shared/video/video-other-mobile';
import { videootherdesktopComponent } from './shared/video/video-other-desktop';

import { YoutubeVideoComponent } from './shared/video/youtube-video';
import { YoutubeService } from './services/youtube.service';

import { videoPortalShimmelComponent } from './shared/video/video-portal/shimmel/';
import { videoPortalShimmel1Component } from './shared/video/video-portal/shimmel/1';
import { videoPortalShimmel2Component } from './shared/video/video-portal/shimmel/2';
import { videoPortalShimmel3Component } from './shared/video/video-portal/shimmel/3';

import { videoPortalFloorComponent } from './shared/video/video-portal/floor/';
import { videoPortalFloor1Component } from './shared/video/video-portal/floor/1';
import { videoPortalFloor2Component } from './shared/video/video-portal/floor/2';
import { videoPortalFloor3Component } from './shared/video/video-portal/floor/3';

import { videoPortalPestComponent } from './shared/video/video-portal/pest/';
import { videoPortalPest1Component } from './shared/video/video-portal/pest/1';
import { videoPortalPest2Component } from './shared/video/video-portal/pest/2';
import { videoPortalPest3Component } from './shared/video/video-portal/pest/3';

import { askaproComponent } from './shared/ask-a-pro';

import { Callback } from './callback-info';
import { Endofflow } from './end-of-flow';
import { Photo } from './problem-photo';
import { Upload } from './upload-photo';
import { Details } from './product-details';
import { evaluationComponent } from './shared/evaluation';
import { topnoticewithiconComponent } from './shared/topnoticewithicon';
import { SafePipe } from './shared/carousel/carousel-other-video/carousel-other-video.component';

export enum ServiceType { MOLD, FLOOR, PEST }

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InteralStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [

    App,
    //About,
    Home,
    NoContent,
    Questions,
    questionsDesktop,
    questionsMobile,
    Question1,
    question1Desktop,
    question1Mobile,
    Question2,
    question2Desktop,
    question2Mobile,
    Question3,
    question3Desktop,
    question3Mobile,

    questioninfo1Component,
    questioninfo2Component,
    questioninfo3Component,
    questioninfo1desktopComponent,
    questioninfo2desktopComponent,
    questioninfo3desktopComponent,

    questioninfo1foodfloorComponent,
    questioninfo2foodfloorComponent,
    questioninfo3foodfloorComponent,
    questioninfo1desktopfoodfloorComponent,
    questioninfo2desktopfoodfloorComponent,
    questioninfo3desktopfoodfloorComponent,

    Analysis,
    analysisDesktop,
    analysisMobile,
    Success,
    Failure,
    Callback,
    Endofflow,
    Photo,
    Upload,
    Details,

    XLarge,
    homeDesktop,
    homeMobile,
    failureDesktop,
    failureMobile,
    successDesktop,
    successMobile,
    callbackDesktop,
    callbackMobile,
    photoDesktop,
    photoMobile,
    uploadDesktop,
    uploadMobile,
    detailsDesktop,
    detailsMobile,
    endofflowMobile,
    endofflowDesktop,
    sidenavComponent,

    tippbaseComponent,

    tippPortalMobileShimmelComponent,
    tippPortalMobilePestComponent,
    tippPortalMobileFloorComponent,

    tippPortalDesktopShimmelComponent,
    tippPortalDesktopFloorComponent,
    tippPortalDesktopPestComponent,

    tipprecomendComponent,
    tippsubpageComponent,
    tippdesktopComponent,
    tippverticalbuttonComponent,

    testconfigurationComponent,

    footerlinkComponent,
    footerdesktopComponent,
    topbarComponent,
    mobilenavComponent,
    resultnoComponent,
    resultyesComponent,
    topmenudesktopComponent,
    desktopnavComponent,

    carouselhomeComponent,
    carouselhomefoodfloorComponent,
    carouselhomewithimageComponent,
    carouselothervideoComponent,
    carouseltestimonialsComponent,

    tablesubarticlesComponent,

    linkerML,
    contentArticleShimmel1,
    contentArticleShimmel2,
    contentArticleFloor1,
    contentArticleFloor2,
    contentArticlePest1,
    contentArticlePest2,

    Articles,
    contentArticle,

    articleContentDesktopShimmel1,
    articleContentMobileShimmel1,
    articleContentDesktopShimmel2,
    articleContentMobileShimmel2,

    articleContentDesktopFloor1,
    articleContentMobileFloor1,
    articleContentDesktopFloor2,
    articleContentMobileFloor2,

    articleContentDesktopPest1,
    articleContentMobilePest1,
    articleContentDesktopPest2,
    articleContentMobilePest2,

    articleHeaderShimmel1,
    articleHeaderShimmel2,

    articleHeaderPest1,
    articleHeaderPest2,

    articleHeaderFloor1,
    articleHeaderFloor2,

    contentChecklist,
    checklistContentDesktop,
    checklistContentMobile,

    contentTerms,
    termsContentDesktop,
    termsContentMobile,
    termsContent,

    contentDisclaimer,
    disclaimerContentDesktop,
    disclaimerContentMobile,
    disclaimerContent,

    contentContacts,
    contactsContentDesktop,
    contactsContentMobile,
    contactsContent,

    contentAbout,
    aboutContentDesktop,
    aboutContentMobile,
    aboutContent,

    articlebaseComponent,
    articlesPortalShimmelComponent,
    articlesPortalFloorComponent,
    articlesPortalPestComponent,

    portalArticle1ShimmelComponent,
    portalArticle1ShimmelMobileComponent,
    portalArticle1FloorComponent,
    portalArticle1FloorMobileComponent,
    portalArticle1PestComponent,
    portalArticle1PestMobileComponent,

    portalChecklist1ShimmelComponent,
    portalChecklist1ShimmelMobileComponent,
    portalChecklist1FloorComponent,
    portalChecklist1FloorMobileComponent,
    portalChecklist1PestComponent,
    portalChecklist1PestMobileComponent,

    articlebaserecomendationsComponent,

    articleforrecomendationschecklistsmobileComponent,

    excerptComponent,
    excerptsubpagechecklistComponent,
    excerptsubpagechecklist2Component,

    otherarticlesComponent,
    otherArticlesComponentToShimmelArticle1,
    otherArticlesComponentToShimmelArticle2,
    otherArticlesComponentToFloorArticle1,
    otherArticlesComponentToFloorArticle2,
    otherArticlesComponentToPestArticle1,
    otherArticlesComponentToPestArticle2,

    primaryContent,

    primaryContentShimmel,
    primaryContentShimmelDesktop,
    primaryContentShimmelMobile,

    primaryContentPest,
    primaryContentPestDesktop,
    primaryContentPestMobile,

    primaryContentFloor,
    primaryContentFloorDesktop,
    primaryContentFloorMobile,

    Portal,
    portalDesktop,
    portalMobile,

    ratebaseComponent,
    ratevideoComponent,
    rategoodComponent,
    ratebadComponent,
    ratemorecontentComponent,
    rateforsubpageComponent,

    listofarticlesComponent,
    blocknotedesktopComponent,
    blocknotemobileComponent,
    blocknoterecomendationsComponent,
    blocknotesubpagemobileComponent,
    blocknotesubpagedesktopComponent,
    blocknotefinishComponent,
    blocknotefinishmobileComponent,

    taglinebaseComponent,
    taglinecategoryonlyComponent,
    taglineforsubpageComponent,
    taglineforsubpagechecklistsComponent,
    taglineopacityComponent,
    taglineopacityarticleComponent,
    taglinecategoryComponent,
    taglinecategoryvideoComponent,
    tagLineCategoryDrillComponent,
    tagLineCategoryPestComponent,
    taglinevideootherComponent,
    taglinechecklistlinkComponent,

    taglinePortalMobileShimmel1,
    taglinePortalMobileShimmel2,
    taglinePortalMobileFloor1,
    taglinePortalMobileFloor2,
    taglinePortalMobilePest1,
    taglinePortalMobilePest2,

    exampleComponent,
    mobileSidenavComponent,
    mobileSidenavMenuComponent,
    mobileSidenavCopyrightComponent,
    mobileSidenavFooterComponent,
    mobileHeaderComponent,
    mobileSidenavTopBlockComponent,

    videobestComponent,
    videobestComponentFloor,
    videobestComponentPest,
    videobestComponentShimmel,
    YoutubeVideoComponent,
    videootherComponent,
    videootherrightComponent,
    videoothermobileComponent,
    videootherdesktopComponent,

    videoPortalShimmelComponent,
    videoPortalShimmel1Component,
    videoPortalShimmel2Component,
    videoPortalShimmel3Component,

    videoPortalFloorComponent,
    videoPortalFloor1Component,
    videoPortalFloor2Component,
    videoPortalFloor3Component,

    videoPortalPestComponent,
    videoPortalPest1Component,
    videoPortalPest2Component,
    videoPortalPest3Component,


    askaproComponent,
    evaluationComponent,

    topnoticewithiconComponent,

    SafePipe
    //Direction
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, { useHash: false }
      //RouterModule.forRoot(ROUTES, { useHash: true}
    ),
    MdButtonModule.forRoot(),
    //MdButtonToggleModule.forRoot(),
    MdCardModule.forRoot(),
    MdCheckboxModule.forRoot(),
    MdGridListModule.forRoot(),
    MdIconModule.forRoot(),
    MdInputModule.forRoot(),
    MdListModule.forRoot(),
    MdMenuModule.forRoot(),
    MdProgressBarModule.forRoot(),
    MdProgressCircleModule.forRoot(),
    MdRadioModule.forRoot(),
    MdRippleModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdSliderModule.forRoot(),
    MdSlideToggleModule.forRoot(),
    MdTabsModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdTooltipModule.forRoot(),
    OverlayModule.forRoot(),
    PortalModule.forRoot(),
    RtlModule.forRoot(),
    CarouselModule,
    SelectModule,
    Ng2PageScrollModule


  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS, Title, EmitterService, WindowService, moldService, YoutubeService,
    //APP_PROVIDERS,Title,EmitterService,WindowService,moldService,{provide: APP_BASE_HREF, useValue : '/mold' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) { }

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
