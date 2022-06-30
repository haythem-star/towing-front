import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeService } from 'src/app/services/demande.service';
import { NgbToastHeader } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-geoclient',
  templateUrl: './geoclient.component.html',
  styleUrls: ['./geoclient.component.scss']
})
export class GeoClientComponent implements OnInit {
  title = 'locationApp';
  latLong: any;
  lat: any;
  long: any;
  form:FormGroup;
  submitted = false;
  data:any;
  NgbToastHeader: any;
  constructor(private formBuilder: FormBuilder,private router:Router, private demandeservice:DemandeService) { }


  createForm() {
    this.form = this.formBuilder.group({
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      acceptation: ["true", Validators.required],
     
    
   

    },
  );
  }

  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
    this.latLong = [coords.latitude, coords.longitude];
    this.lat = [coords.latitude];
    this.long = [coords.longitude];
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


      marker.bindPopup(`<center>
      <p>
         <strong>Demande De Remorquage</strong></p></center>
   <a class="btn btn-primary" type="button" href="https://www.google.com/maps/@33.9183866,8.1224174,13z">Google Maps</a> 
       `).openPopup();

      let popup = L.popup()
        .setLatLng(this.latLong)
        .setContent('Ma position Actuelle')
        .openOn(mapclient);
    });
    this.watchPosition();
    this.createForm();
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

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    // if(this.form.invalid) {
    //   return;
    // }

    // this.demandeservice.EnvoyerDemandes(this.form.value).subscribe(res => {

    //   this.data = res;
    //   console.log(this.form);
    //   console.log(this.form.value);
    //   if(this.data.status === 1 ) {

    //     // this.router.navigate(['/client']);
       

    //   }
    //   else if(this.data.status === 0 ) {
    //     this.NgbToastHeader.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code),
    //     {
    //       timeOut: 2000,
    //       progressBar: true
    //     });
    //     console.log("error en envoyant demande ");
        
      

    //   }
      

     
    //  this.submitted = false;
    // /* this.form.get('mvehicule').reset();
    //  this.form.get('panne').reset();
    //  this.form.get('nombre_personne').reset();
    //  this.form.get('dateSaisie').reset();
    //  this.form.get('id_user').reset();
    //  this.form.get('lat').reset();
    //  this.form.get('long').reset();*/

    // });
    this.router.navigate(['/client/historique']);

  }
}


