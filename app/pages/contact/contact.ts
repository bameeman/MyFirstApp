import {Page, NavController , NavParams} from 'ionic-angular';

/*
  Generated class for the ContactPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/contact/contact.html',
})
export class ContactPage {
  myName: string;
  myEmail: string;

  constructor(public nav: NavController, navParams:NavParams) {
    this.nav = nav;

    this.myName = navParams.get('myName');
    this.myEmail = navParams.get('myEmail');
  }
}
