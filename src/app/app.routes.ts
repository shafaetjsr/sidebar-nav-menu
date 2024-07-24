import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginlayoutComponent } from './loginlayout/loginlayout.component';
import { BrandsComponent } from './master-data/brands/brands.component';
import { Component } from '@angular/core';
import { ProductComponent } from './master-data/product/product.component';
import { ModelComponent } from './master-data/model/model.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginlayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      {path:'barnd',component:BrandsComponent},
      {path:"product",component:ProductComponent},
      {path:'model',component:ModelComponent}
    ]
  },
  { path: '**', redirectTo: 'login' }
];
