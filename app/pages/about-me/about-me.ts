import {Page, NavController} from 'ionic-angular';

// import ContactPage
import {ContactPage} from '../contact/contact';

/*
  Generated class for the AboutMePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/about-me/about-me.html',
})
export class AboutMePage {
  constructor(public nav: NavController) {
    this.nav = nav;
  }

  //my function insert here
  goToContact(){
    this.nav.push(ContactPage , {
      myName: 'Jirawat S.',
      myEmail: 'jirawat@prjsolutions.com'
    });
  }
}
