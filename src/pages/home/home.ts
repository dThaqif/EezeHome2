import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../Properties/details/details';
import { SearchPage } from '../Properties/search/search';
import { AccountPage } from '../Users/account/account';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  detailsPage = DetailsPage;
  searchPage = SearchPage;
  accountPage = AccountPage;


  constructor(public navCtrl: NavController) { }

}
