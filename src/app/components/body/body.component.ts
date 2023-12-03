import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, BtnComponent],
  templateUrl: './body.component.html',
  styles: ``
})
export class BodyComponent {

}
