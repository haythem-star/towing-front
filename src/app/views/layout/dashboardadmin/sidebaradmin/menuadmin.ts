import { MenuAdminItem } from './menuadminmodel';

export const MENU: MenuAdminItem[] = [
  
  {
    label: 'Acceuil',
    icon: 'home',
    link: '/admin'
  },
  {
    label: 'Liste Clients',
    icon: 'users',
    link: '/admin/listclient'
  },

  {
    label: 'Liste Vehicules',
    icon: 'clipboard',
    link: '/admin/listvehicule'
  },

  {
    label: 'Liste Camions',
    icon: 'truck',
    link: '/admin/listcamion'
  },
  {
    label: 'Liste Demandes',
    icon: 'file-text',
    link: '/admin/listdemandes'
  },

  {
    label: 'Liste Chauffuers',
    icon: 'user',
    link: '/admin/listchauffeur'
  },

  {
    label: 'Geolocalisation',
    icon: 'map-pin',
    link: '/admin/geolocalisation'
  },

  {
    label: 'Historique',
    icon: 'database',
    link: '/admin/historique'
  },


];
