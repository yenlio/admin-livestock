import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/home-module/home-module.module').then(m => m.HomeModuleModule)
      },
      {
        path: 'book',
        loadChildren: () =>
          import('./modules/demo-book/demo-book.module').then(m => m.DemoBookModule)
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/demo-crud/demo-crud.module').then(m => m.DemoCRUDModule)
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./modules/auth-module/auth-module.module').then(m => m.AuthModuleModule)
      },

    ]
  },

  // Fallback when no prior routes is matched
  // { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
