import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import { BaseClientComponent } from './views/layout/dashboardclient/baseclient/baseclient.component';
import { BaseAdminComponent } from './views/layout/dashboardadmin/baseadmin/baseadmin.component';
import { BaseChauffeurComponent } from './views/layout/dashboardchauffeur/basechauffeur/basechauffeur.component';
import { ListclientComponent } from './views/pages/admin/listclient/listclient.component';
import { ListvehiculeComponent } from './views/pages/admin/listvehicule/listvehicule.component';
import { ListcamionComponent } from './views/pages/admin/listcamion/listcamion.component';
import { ListdemandesComponent } from './views/pages/admin/listdemandes/listdemandes.component';
import { ListchauffeurComponent } from './views/pages/admin/listchauffeur/listchauffeur.component';
import { GeolocalisationComponent } from './views/pages/admin/geolocalisation/geolocalisation.component';
import { HistoriqueComponent } from './views/pages/admin/historique/historique.component';
import { MesVehiculesComponent } from './views/pages/client/mes-vehicules/mes-vehicules.component';
import { MesdemandesComponent } from './views/pages/client/mesdemandes/mesdemandes.component';
import { MesmissionComponent } from './views/pages/chauffeur/mesmission/mesmission.component';
import { MesclientComponent } from './views/pages/chauffeur/mesclient/mesclient.component';
import { MescamionComponent } from './views/pages/chauffeur/mescamion/mescamion.component';
import { GeoChauffuerComponent } from './views/pages/chauffeur/geochauffuer/geochauffuer.component';
import { HistoriqueChauffeurComponent } from './views/pages/chauffeur/historiquechauffeur/historiquechauffeur.component';
import { GeoClientComponent } from './views/pages/client/geoclient/geoclient.component';
import { HistoriqueClientComponent } from './views/pages/client/historiqueclient/historiqueclient.component';
import { EditProfileComponent } from './views/pages/editprofile/editprofile.component';
import { EditcamionComponent } from './views/pages/editcamion/editcamion.component';






const routes: Routes = [
  { path:'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },
 /* {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [

      {
        path: 'dashboard',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },


     // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },*/

 {
  path: 'client',
  component: BaseClientComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      loadChildren: () => import('./views/layout/dashboardclient/clienthome/clienthome.module').then(m => m.ClientHomeModule)
    },
    { path: 'mesvehicules',component: MesVehiculesComponent},
    { path: 'mesdemandes',component: MesdemandesComponent},
    { path: 'geolocalisation',component: GeoClientComponent},
    { path: 'historique',component: HistoriqueClientComponent},
    { path: 'edit/:id',component: EditProfileComponent},

  ]
 },

 {
  path: 'admin',
  component: BaseAdminComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      loadChildren: () => import('./views/layout/dashboardadmin/adminhome/adminhome.module').then(m => m.AdminHomeModule)
    },
   { path: 'listclient',component: ListclientComponent},
   { path: 'listvehicule',component: ListvehiculeComponent},
   { path: 'listcamion',component: ListcamionComponent},
   { path: 'listdemandes',component: ListdemandesComponent},
   { path: 'listchauffeur',component: ListchauffeurComponent},
   { path: 'geolocalisation',component: GeolocalisationComponent},
   { path: 'historique',component: HistoriqueComponent},
   { path: 'edit/:id',component: EditProfileComponent},
   { path: 'editcamion/:id',component: EditcamionComponent},


  ]
 },



 {
  path: 'chauffeur',
  component: BaseChauffeurComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      loadChildren: () => import('./views/layout/dashboardchauffeur/chauffuerhome/chauffuerhome.module').then(m => m.ChauffuerHomeModule)
    },
    { path: 'mesmission',component: MesmissionComponent},
    { path: 'mesclient',component: MesclientComponent},
    { path: 'mescamion',component: MescamionComponent},
    { path: 'geolocalisation',component: GeoChauffuerComponent},
    { path: 'historique',component: HistoriqueChauffeurComponent},
    { path: 'edit/:id',component: EditProfileComponent},

  ]
 },
 { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
  { path: 'edit/:id',component: EditProfileComponent},
  { path: 'editcamion/:id',component: EditcamionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
