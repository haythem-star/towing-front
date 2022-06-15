import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-geoclient',
  templateUrl: './geoclient.component.html',
  styleUrls: ['./geoclient.component.scss']
})
export class GeoClientComponent implements OnInit {
  title = 'locationApp';
  latLong: any;

  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
    this.latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mapclient = L.map('mapclient').setView(this.latLong, 13);

      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiYWhtZWR0dW5pc2llIiwiYSI6ImNrdXF0aHhudjE1eDQydnFyajA0Z3R5Z2gifQ.WV3rmKVyhm5XiyOI6Nqjhg',
        {
             maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'sk.eyJ1IjoiYWhtZWR0dW5pc2llIiwiYSI6ImNrdXF0aHhudjE1eDQydnFyajA0Z3R5Z2gifQ.WV3rmKVyhm5XiyOI6Nqjhg',
        }
      ).addTo(mapclient);

      var IconStyleOne = L.icon({
        iconUrl: 'assets/images/car.png',
        iconSize:[31, 46],
        shadowSize:[50, 64],
        iconAnchor:[15.5, 42],
        shadowAnchor:[4, 62],
        popupAnchor:[0, -45],
         });

      let marker = L.marker(this.latLong,{icon: IconStyleOne}).addTo(mapclient);


      marker.bindPopup('<b>My Postion</b>').openPopup();

      let popup = L.popup()
        .setLatLng(this.latLong)
        .setContent('this is your position')
        .openOn(mapclient);
    });
    this.watchPosition();
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
}
