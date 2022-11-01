import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { JacobsServicesComponent } from './pages/jacobs-services/jacobs-services.component';
import { JstoreComponent } from './pages/jstore/jstore.component';
import { MainServicesComponent } from './pages/main-services/main-services.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'jstore', component: JstoreComponent},
  { path: 'main_services', component: MainServicesComponent},
  { path: 'jacobs_services', component: JacobsServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
