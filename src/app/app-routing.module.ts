import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { AdminComponent } from './admin/admin.component';
import { MyClassifiedsComponent } from './my-classifieds/my-classifieds.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'inbox', component: InboxComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'myclassifieds', component: MyClassifiedsComponent },
  { path: 'classifieds', component: AppComponent }
  
  
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
