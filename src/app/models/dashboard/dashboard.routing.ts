import { Component } from '@angular/core';
import { DashboardHomeComponent } from './page/dashboard-home/dashboard-home.component';
import { Route, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/modules/home/home.component';
export const DASHBOARD_ROUTES: Routes = [

  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },

  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'dashboard',
    component: DashboardHomeComponent,
  }
]
