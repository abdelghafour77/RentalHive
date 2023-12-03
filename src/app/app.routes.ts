import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BodyComponent } from './components/body/body.component';

export const routes: Routes = [
      { path: '', component: BodyComponent },
      { path: 'users', component: UsersComponent },
      { path: '**', component: PageNotFoundComponent },
];
