import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'product', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule) },
{ path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
{ path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
{ path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
{ path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
{path: '', redirectTo: '/main', pathMatch: 'full'},
{path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
