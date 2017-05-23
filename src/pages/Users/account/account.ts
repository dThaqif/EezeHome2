import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CameraPreview, CameraPreviewRect } from 'ionic-native';

/**
 * Generated class for the Account page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})

export class AccountPage {
base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {

  }
 takePicture() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 2000,
      targetHeight: 2000,
      quality: 100,
      allowEdit: true,
      correctOrientation: false,
      saveToPhotoAlbum: true,
      mediaType: 0
    }).then((imageData) => {
      let cameraImageSelector = document.getElementById('camera-image');
      let image = "data:image/jpeg;base64," + imageData;
      cameraImageSelector.setAttribute('src', image );
    }, (err) => {
      console.log(err);
    });
  }

ionViewDidLoad() {
  console.log('ionViewDidLoad Account');
}
}