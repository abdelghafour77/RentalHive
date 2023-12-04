import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Family } from '../../models/family';
import { FamilyService } from '../../services/family/family.service';

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './family.component.html'
})

export class FamilyComponent implements OnInit {
  families: Family[] = [];

  constructor(private userService: FamilyService) { }

  ngOnInit(): void {
    this.userService.getFamilies().subscribe((data: Family[]) => {
      this.families = data;
    }
    );
  }




}
