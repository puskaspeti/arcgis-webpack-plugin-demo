import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COMMON_ROUTING, Shell } from '@eing/common';

const routes: Routes = [
  Shell.childRoutes([{ path: '', loadChildren: () => import('./terkep/terkep.module').then((m) => m.TerkepModule) }]),
  ...COMMON_ROUTING,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
