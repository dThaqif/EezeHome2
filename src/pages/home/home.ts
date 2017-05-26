import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../Properties/details/details';
import { SearchPage } from '../Properties/search/search';
import { AccountPage } from '../Users/account/account';
import { CameraProvider } from '../../providers/camera-provider';
import { UserProvider } from '../../providers/user-provider';
import { LoginPage} from '../Authentication/login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  detailsPage = DetailsPage;
  searchPage = SearchPage;
  accountPage = AccountPage;


  constructor(public navCtrl: NavController, public cameraService: CameraProvider, public userAuth: UserProvider) { }

  goTotakePicture() {
    return this.cameraService.takePicture();
  }
  goToLogOut() {
    this.userAuth.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    });

  }
}
