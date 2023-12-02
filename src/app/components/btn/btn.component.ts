import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
  styles: ``
})
export class BtnComponent implements OnInit {
  @Input() text?: string;
  @Input() color?: string;

  constructor() { }

  ngOnInit(): void {
  }
}
