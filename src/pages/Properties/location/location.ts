import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  map: GoogleMap;
  location = new LatLng(3.046734, 101.688589);
 

  constructor(public navCtrl: NavController, public platform: Platform, private geolocation: Geolocation) {
    platform.ready().then(() => {
      this.loadMap();
    });}

    ngAfterViewInit(){
      this.loadMap();
    }

  loadMap() {


    this.map = new GoogleMap('map', {
      'backgroundColor': 'white',
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'camera': {
        'latLng': this.location,
        'tilt': 30,
        'zoom': 15

      }
    });

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
      let markeroptions: MarkerOptions = {
        position: this.location,
        title: 'My Marker',
        animation: 'DROP'
      };

      let marker = this.map.addMarker(markeroptions).then((marker: Marker) => {
        marker.showInfoWindow();
        console.log('Map is ready!');
      });
    });


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Location');
  }
}












