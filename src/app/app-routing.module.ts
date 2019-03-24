import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhoamiComponent } from './whoami/whoami.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { ProgrammingComponent } from './programming/programming.component';
import { DevopsComponent } from './devops/devops.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: WhoamiComponent },
  { path: 'programming', component: ProgrammingComponent },
  { path: 'devops', component: DevopsComponent },
  { path: 'contact', component: ContactComponent },

  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
