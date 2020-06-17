import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayuserComponent } from './displayuser/displayuser.component';


const routes: Routes = [
  {path: 'dashboard',component: DashboardComponent},
  {path: 'username',component: DisplayuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DashboardComponent,DisplayuserComponent]
