import {Page, NavController,Loading} from 'ionic-angular';
import {Moviesprovider} from '../../providers/moviesprovider/moviesprovider'; // 1

// test to use http service with providers

@Page({
  providers:[Moviesprovider], // 2
  templateUrl: 'build/pages/movies/movies.html',
})
export class MoviesPage {
  items: any = null;
  constructor(public nav: NavController, m:Moviesprovider) { //3
    this.nav = nav;
    this.presentLoading();
    this.items = m.load();
  }
  presentLoading() {
      let loading = Loading.create({
          content: "Please wait...",
          duration: 1000,
          dismissOnPageChange: true
      });
      this.nav.present(loading);
  }
}
