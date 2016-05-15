import {Page, NavController,NavParams} from 'ionic-angular';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

import {PlayyoutubePage} from '../playyoutube/playyoutube';
/*
  Generated class for the ListDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  providers: [HTTP_PROVIDERS],
  templateUrl: 'build/pages/list-detail/list-detail.html',
})
export class ListDetailPage {
  chView : number;
  chTitle: string;
  youtubeUrl: string;

  id: number;
  title: string;
  items: Array<{}>;
  http:Http;

  constructor(public nav: NavController, navParams: NavParams, httpService: Http) {
    this.nav = nav;
    this.id = navParams.get('id');
    this.title = navParams.get('title');
    // getting http json file //
    this.http = httpService;
    this.http.get("http://codingthailand.com/api/get_course_detail.php?course_id="+this.id).subscribe(
      (res) => {
          this.items = res.json();
      });  // get data from webservice
  }
  itemTapped(event, item) {
    this.nav.push(PlayyoutubePage, {
      chTitle: item.ch_title,
      youtubeUrl: item.ch_url,
      chView: item.ch_view
    });
  }
}
