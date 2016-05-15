import {App, IonicApp, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {GettingStartedPage} from './pages/getting-started/getting-started';
import {ListPage} from './pages/list/list';

import {AboutMePage} from './pages/about-me/about-me';
import {ContactPage} from './pages/contact/contact';
import {ListDetailPage} from './pages/list-detail/list-detail';
import {MusicPage} from './pages/music/music';
import {MoviesPage} from './pages/movies/movies';
import {UserPage} from './pages/user/user';
@App({
    templateUrl: 'build/app.html',
    config: {
        //mode: 'md'
        backButtonText: 'Go Back',
        iconMode: 'ios',
        modalEnter: 'modal-slide-in',
        modalLeave: 'modal-slide-out',
        tabbarPlacement: 'bottom',
        pageTransition: 'ios'
    }

    // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
    rootPage: any = GettingStartedPage;
    pages: Array<{ title: string, component: any }>

    constructor(private app: IonicApp, private platform: Platform) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'หน้าหลัก', component: GettingStartedPage },
            { title: 'ระบบสมาชิก', component: UserPage },
            { title: 'Course List', component: ListPage },
            { title: 'รายการภาพยนตร์', component: MoviesPage },
            { title: 'รายการเพลง', component: MusicPage },
            { title: 'ติดต่อเรา', component: ContactPage },
            { title: 'เกี่ยวกับเรา', component: AboutMePage }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        let nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    }
}
