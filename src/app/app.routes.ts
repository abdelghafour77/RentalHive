import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BodyComponent } from './components/body/body.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { DemandComponent } from './components/demand/demand.component';

export const routes: Routes = [
      { path: '', component: BodyComponent },
      { path: 'users', component: UsersComponent },
      { path: 'demand', component: DemandComponent },
      { path: 'reservation', component: ReservationComponent },
      { path: '**', component: PageNotFoundComponent },
];
