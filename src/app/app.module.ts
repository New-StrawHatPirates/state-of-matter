import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './pages/partials/navbar/navbar.component';
import {HomeComponent} from './pages/home/home.component';
import {FooterComponent} from './pages/partials/footer/footer.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {SignUpComponent} from './pages/sign-in/sign-up/sign-up.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {ContentListTileComponent} from './pages/partials/content-list-tile/content-list-tile.component';
import {CarouselComponent} from './pages/partials/carousel/carousel.component';
import {BaseBackgroundComponent} from './pages/partials/base-background/base-background.component';
import {ImageGalleryComponent} from './pages/partials/image-gallery/image-gallery.component';
import {SlidingSectionComponent} from './pages/partials/sliding-section/sliding-section.component';
import {NewsSectionComponent} from './pages/partials/news-section/news-section.component';
import {MoviesComponent} from './pages/movies/movies.component';
import {AnimeComponent} from './pages/anime/anime.component';
import {CarouselListComponent} from './pages/partials/carousel-list/carousel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    SignUpComponent,
    SignInComponent,
    ContentListTileComponent,
    CarouselComponent,
    BaseBackgroundComponent,
    ImageGalleryComponent,
    SlidingSectionComponent,
    NewsSectionComponent,
    MoviesComponent,
    AnimeComponent,
    CarouselListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
