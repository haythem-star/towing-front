import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';



import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { AdminComponent } from './views/pages/admin/admin.component';
import { ClientComponent } from './views/pages/client/client.component';
import { ChauffeurComponent } from './views/pages/chauffeur/chauffeur.component';
import { ListclientComponent } from './views/pages/admin/listclient/listclient.component';
import { HistoriqueComponent } from './views/pages/admin/historique/historique.component';
import { ListvehiculeComponent } from './views/pages/admin/listvehicule/listvehicule.component';
import { ListchauffeurComponent } from './views/pages/admin/listchauffeur/listchauffeur.component';
import { ListdemandesComponent } from './views/pages/admin/listdemandes/listdemandes.component';
import { GeolocalisationComponent } from './views/pages/admin/geolocalisation/geolocalisation.component';
import { MesVehiculesComponent } from './views/pages/client/mes-vehicules/mes-vehicules.component';
import { MesdemandesComponent } from './views/pages/client/mesdemandes/mesdemandes.component';
import { HistoriqueClientComponent } from './views/pages/client/historiqueclient/historiqueclient.component';
import { MescamionComponent } from './views/pages/chauffeur/mescamion/mescamion.component';
import { MesclientComponent } from './views/pages/chauffeur/mesclient/mesclient.component';
import { MesmissionComponent } from './views/pages/chauffeur/mesmission/mesmission.component';
import { ListcamionComponent } from './views/pages/admin/listcamion/listcamion.component';
import { HistoriqueChauffeurComponent } from './views/pages/chauffeur/historiquechauffeur/historiquechauffeur.component';
import { EditProfileComponent } from './views/pages/editprofile/editprofile.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditcamionComponent } from './views/pages/editcamion/editcamion.component';






@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    AdminComponent,
    ClientComponent,
    ChauffeurComponent,
    ListclientComponent,
    ListvehiculeComponent,
    ListchauffeurComponent,
    ListdemandesComponent,
    GeolocalisationComponent,
    MesVehiculesComponent,
    MesdemandesComponent,
    HistoriqueClientComponent,
    HistoriqueChauffeurComponent,
    MescamionComponent,
    MesclientComponent,
    MesmissionComponent,
    ListcamionComponent,
    EditProfileComponent,
    EditcamionComponent,
    HistoriqueComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [
    AuthGuard,
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
