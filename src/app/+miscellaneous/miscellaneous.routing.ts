
import {Routes, RouterModule} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'blank',
    pathMatch: 'full'
  },
  {
    path: 'error404',
    loadChildren: './+error404/error404.module#Error404Module'
  },
];

export const routing = RouterModule.forChild(routes);




