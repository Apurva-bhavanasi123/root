import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { ClassifiedsComponent } from './classifieds/classifieds.component';
import { MyClassifiedsComponent } from './my-classifieds/my-classifieds.component';
import { InboxComponent } from './inbox/inbox.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassifiedsComponent,
    MyClassifiedsComponent,
    InboxComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgbModule, SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  _opened: boolean = false;
  _toggleSidebar() {
    this._opened = !this._opened;
  }
}
