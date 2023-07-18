import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: 'signin',
    loadChildren: () =>
      import('../signin/signin.module').then((m) => m.SigninPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('../signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
