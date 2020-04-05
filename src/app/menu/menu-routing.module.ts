import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules} from '@angular/router';


import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/home',
    pathMatch: 'full'
  },

  {
    path: 'menu',
    component: MenuPage,
    children: [
      { path: 'home', 
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'projectlist',
      loadChildren: () => import('../projectlist/projectlist.module').then( m => m.ProjectlistPageModule)
    },

  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
