import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Page404Component } from './pages/static/page404/page404.component';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'configurations',
    loadChildren: () =>
      import('./pages/configurations/configurations.module').then(
        (m) => m.ConfigurationsPageModule
      ),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/news/news.module').then((m) => m.NewsPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'lottery',
    loadChildren: () =>
      import('./pages/lottery/lottery.module').then((m) => m.LotteryPageModule),
  },
  {
    path: 'loading-page',
    loadChildren: () =>
      import('./components/loading/loading-page.module').then(
        (m) => m.LoadingPagePageModule
      ),
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'Page404',
    component: Page404Component,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
