import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhoamiComponent } from './whoami/whoami.component';
import { NotFoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: WhoamiComponent },

  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
