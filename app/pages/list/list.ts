import {Page, NavController, NavParams, Loading} from 'ionic-angular';

import {HTTP_PROVIDERS, Http} from 'angular2/http';

import {ListDetailPage} from '../list-detail/list-detail';

@Page({
    providers: [HTTP_PROVIDERS],
    templateUrl: 'build/pages/list/list.html'
})

export class ListPage {
    items: Array<{}>;
    http: Http;
    constructor(private nav: NavController, httpService: Http) {
        this.nav = nav;
        this.http = httpService;

        this.presentLoading(); // loading

        this.http.get("http://codingthailand.com/api/get_courses.php").subscribe(
            (res) => {
                this.items = res.json();
            });  // get data from webservice
    }

    itemTapped(event, item) {
        this.nav.push(ListDetailPage, {
            id: item.id,
            title: item.c_title
        });
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

/*
import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.nav.push(ListPage, {
      item: item
    });
  }
}
*/
