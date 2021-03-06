import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-geochauffuer',
  templateUrl: './geochauffuer.component.html',
  styleUrls: ['./geochauffuer.component.scss']
})
export class GeoChauffuerComponent implements OnInit {

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
      let mapchauffuer = L.map('mapchauffuer').setView(this.latLong, 13);

      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiYWhtZWR0dW5pc2llIiwiYSI6ImNrdXF0aHhudjE1eDQydnFyajA0Z3R5Z2gifQ.WV3rmKVyhm5XiyOI6Nqjhg',
        {
             maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'sk.eyJ1IjoiYWhtZWR0dW5pc2llIiwiYSI6ImNrdXF0aHhudjE1eDQydnFyajA0Z3R5Z2gifQ.WV3rmKVyhm5XiyOI6Nqjhg',
        }
      ).addTo(mapchauffuer);

      var IconStyleOne = L.icon({
        iconUrl: 'assets/images/car.png',
        iconSize:[31, 46],
        shadowSize:[50, 64],
        iconAnchor:[15.5, 42],
        shadowAnchor:[4, 62],
        popupAnchor:[0, -45],
         });

      let marker = L.marker(this.latLong,{icon: IconStyleOne}).addTo(mapchauffuer);


      marker.bindPopup(`<center>
      <p>
      
   <a class="btn btn-primary" type="button" href="https://www.google.com/maps/@33.9183866,8.1224174,13z">Google Maps</a>
       `).openPopup();

      let popup = L.popup()
        .setLatLng(this.latLong)
        .setContent('Votre position')
        .openOn(mapchauffuer);
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
