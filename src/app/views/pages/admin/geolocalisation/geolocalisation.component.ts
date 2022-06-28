import { Component, OnInit } from '@angular/core';
//import * as L from 'leaflet'
import * as L from 'leaflet';
import { DemandeService } from 'src/app/services/demande.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-geolocalisation',
  templateUrl: './geolocalisation.component.html',
  styleUrls: ['./geolocalisation.component.scss']
})
export class GeolocalisationComponent implements OnInit {
  title = 'locationApp';
  latLong: any;
  vehicules:any;
  token:any;
  userData:any;
  id:any;
  demandes:any;
 // demande = new Demande();
  constructor(public demandeservice : DemandeService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
   // this.userData = jwt_decode(this.token);
    this.id = this.userData.id;
this.getMarkers();
  }
    /*if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
    this.latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('map').setView(this.latLong, 13);

      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiYWhtZWR0dW5pc2llIiwiYSI6ImNrdXF0aHhudjE1eDQydnFyajA0Z3R5Z2gifQ.WV3rmKVyhm5XiyOI6Nqjhg',
        {
             maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'sk.eyJ1IjoiYWhtZWR0dW5pc2llIiwiYSI6ImNrdXF0aHhudjE1eDQydnFyajA0Z3R5Z2gifQ.WV3rmKVyhm5XiyOI6Nqjhg',
        }
      ).addTo(mymap);

      var IconStyleOne = L.icon({
        iconUrl: 'assets/images/car.png',
        iconSize:[31, 46],
        shadowSize:[50, 64],
        iconAnchor:[15.5, 42],
        shadowAnchor:[4, 62],
        popupAnchor:[0, -45],
         });

      let marker = L.marker(this.latLong,{icon: IconStyleOne}).addTo(mymap);


      marker.bindPopup(`<center>
      <p>
      
   <a class="btn btn-primary" type="button" href="https://www.google.com/maps/@33.9183866,8.1224174,13z">Google Maps</a>
       `).openPopup();

      let popup = L.popup()
        .setLatLng(this.latLong)
        .setContent('Ma position')
        .openOn(mymap);
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
  }*/

getMarkers() {
  var mymap = L.map('map').setView([33.8094812, 9.561548], 6);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiYWhtZWR0dW5pc2llIiwiYSI6ImNrdXF0aHhudjE1eDQydnFyajA0Z3R5Z2gifQ.WV3rmKVyhm5XiyOI6Nqjhg', {
    attribution: '',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1IjoiYWhtZWR0dW5pc2llIiwiYSI6ImNrdXF0aHhudjE1eDQydnFyajA0Z3R5Z2gifQ.WV3rmKVyhm5XiyOI6Nqjhg'
}).addTo(mymap);
this.demandeservice.getdemandeByid(this.id).subscribe(res => {
  this.demandes = res;
  this.demandes.lat = this.demandes.lat;
  this.demandes.long = this.demandes.long;


  this.demandes.forEach((item: { lat: any; long: any; mvehicule: any; panne: any; }) => {
  //  console.log("lat .... " + Number(item.lat));
  var IconStyleOne = L.icon({
    iconUrl: 'assets/img/crush.png',
    iconSize:[31, 46],
    shadowSize:[50, 64],
    iconAnchor:[15.5, 42],
    shadowAnchor:[4, 62],
    popupAnchor:[0, -45],
     });
  var marker = L.marker([Number(item.lat), Number(item.long)],{icon: IconStyleOne}).addTo(mymap);
  marker.bindPopup(`<center>
                       <p>
                          <strong>Demande</strong></p></center>
                       <p><strong>Marque :</strong> ${item.mvehicule}</p>
                       <p><strong>Panne :</strong> ${item.panne}</p>
                        `);

  var popup = L.popup();

  });

});
 }}
