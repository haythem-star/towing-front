import { MenuChauffeurItem } from './menuchauffeurmodel';

export const MENU: MenuChauffeurItem[] = [
 
  {
    label: 'Mes Mission',
    icon: 'airplay',
    link: '/chauffeur/mesmission'
  },

  {
    label: 'Mes Camions',
    icon: 'truck',
    link: '/chauffeur/mescamion'
  },

  {
    label: 'Geolocalisation',
    icon: 'map-pin',
    link: '/chauffeur/geolocalisation'
  },

  {
    label: 'Historique',
    icon: 'database',
    link: '/chauffeur/historique'
  },
];
