import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from '../btn/btn.component';
import { BrandComponent } from '../brand/brand.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BtnComponent],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

}
