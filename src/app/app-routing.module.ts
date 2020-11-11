import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartWrapperComponent} from './components/chart-wrapper/chart-wrapper.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
const routes: Routes = [
  {path: 'chart-wrapper', component: ChartWrapperComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: '', redirectTo: '/dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
