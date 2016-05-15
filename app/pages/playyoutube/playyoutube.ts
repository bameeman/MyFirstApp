import {Page, NavController,NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/playyoutube/playyoutube.html',
})
export class PlayyoutubePage {
  chView : number;
  chTitle: string;
  youtubeUrl: string;
  constructor(public nav: NavController, navParams:NavParams) {
    this.nav = nav;
    this.youtubeUrl = navParams.get('youtubeUrl');
    this.chTitle = navParams.get('chTitle');
    this.chView = navParams.get('chView');
  }
}
