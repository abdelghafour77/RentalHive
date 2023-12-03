import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrandSliderComponent } from './components/brand-slider/brand-slider.component';
import { UsersComponent } from './components/users/users.component';
import { BtnComponent } from './components/btn/btn.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavbarComponent,
    BrandSliderComponent,
    UsersComponent,
    BtnComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'rentalhive';
}
