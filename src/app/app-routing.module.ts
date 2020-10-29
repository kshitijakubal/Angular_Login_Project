import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SurpriseComponent } from './surprise/surprise.component';
import { TablesComponent } from './tables/tables.component';


const routes: Routes = [
  { path:"", redirectTo:"login", pathMatch:"full"},
  { path:"login", component: LoginComponent},
  { path:'tables', component: TablesComponent},
  { path:"surprise", component: SurpriseComponent },
  {path:"**",redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
