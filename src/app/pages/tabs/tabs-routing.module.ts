import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'registro',
        loadChildren: () =>
          import('../auth/signup/signup.module').then(
            (m) => m.SignupPageModule
          ),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('../news/news.module').then((m) => m.NewsPageModule),
      },
      {
        path: 'configuraciones',
        loadChildren: () =>
          import('../configurations/configurations.module').then(
            (m) => m.ConfigurationsPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
